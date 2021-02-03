import {
  ADD_LANGUAGE,
  EDIT_LANGUAGE,
  DELETE_LANGUAGE,
  ADD_STRENGTH,
  EDIT_STRENGTH,
  DELETE_STRENGTH,
  InputListFormActions,
} from "./inputListActionTypes";
import { FormInputListType } from "../../hooks/form/formTypes";

const inputListReducer = (
  inputList: FormInputListType,
  action: InputListFormActions
): FormInputListType => {
  switch (action.type) {
    case ADD_LANGUAGE:
      return {
        ...inputList,
        languages: [...inputList.languages, action.payload],
      };
    case EDIT_LANGUAGE:
      return {
        ...inputList,
        languages: [
          ...inputList.languages.map((language, i) =>
            i === action.payload.itemIndex ? action.payload.language : language
          ),
        ],
      };
    case DELETE_LANGUAGE:
      return {
        ...inputList,
        languages: [
          ...inputList.languages.filter((_, i) => i !== action.payload),
        ],
      };
    case ADD_STRENGTH:
      return {
        ...inputList,
        strengths: [...inputList.strengths, action.payload],
      };
    case EDIT_STRENGTH:
      return {
        ...inputList,
        strengths: [
          ...inputList.strengths.map((strength, i) =>
            i === action.payload.itemIndex ? action.payload.strength : strength
          ),
        ],
      };
    case DELETE_STRENGTH:
      return {
        ...inputList,
        strengths: [
          ...inputList.strengths.filter((_, i) => i !== action.payload),
        ],
      };
    default:
      return inputList;
  }
};

export default inputListReducer;

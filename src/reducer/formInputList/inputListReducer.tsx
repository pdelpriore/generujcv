import {
  ADD_LANGUAGE,
  EDIT_LANGUAGE,
  DELETE_LANGUAGE,
  ADD_STRENGTH,
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
    default:
      return inputList;
  }
};

export default inputListReducer;

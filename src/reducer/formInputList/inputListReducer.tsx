import {
  ADD_LANGUAGE,
  EDIT_LANGUAGE,
  DELETE_LANGUAGE,
  ADD_STRENGTH,
  EDIT_STRENGTH,
  DELETE_STRENGTH,
  ADD_HOBBY,
  EDIT_HOBBY,
  DELETE_HOBBY,
  ADD_DIPLOMA,
  EDIT_DIPLOMA,
  DELETE_DIPLOMA,
  ADD_EXPERIENCE,
  EDIT_EXPERIENCE,
  DELETE_EXPERIENCE,
  ADD_COMPETENCE,
  EDIT_COMPETENCE,
  DELETE_COMPETENCE,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
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
    case ADD_HOBBY:
      return { ...inputList, hobbies: [...inputList.hobbies, action.payload] };
    case EDIT_HOBBY:
      return {
        ...inputList,
        hobbies: [
          ...inputList.hobbies.map((hobby, i) =>
            i === action.payload.itemIndex ? action.payload.hobby : hobby
          ),
        ],
      };
    case DELETE_HOBBY:
      return {
        ...inputList,
        hobbies: [...inputList.hobbies.filter((_, i) => i !== action.payload)],
      };
    case ADD_DIPLOMA:
      return {
        ...inputList,
        diplomas: [...inputList.diplomas, action.payload],
      };
    case EDIT_DIPLOMA:
      return {
        ...inputList,
        diplomas: [
          ...inputList.diplomas.map((diploma, i) =>
            i === action.payload.itemIndex ? action.payload.diploma : diploma
          ),
        ],
      };
    case DELETE_DIPLOMA:
      return {
        ...inputList,
        diplomas: [
          ...inputList.diplomas.filter((_, i) => i !== action.payload),
        ],
      };
    case ADD_EXPERIENCE:
      return {
        ...inputList,
        experiences: [...inputList.experiences, action.payload],
      };
    case EDIT_EXPERIENCE:
      return {
        ...inputList,
        experiences: [
          ...inputList.experiences.map((experience, i) =>
            i === action.payload.itemIndex
              ? action.payload.experience
              : experience
          ),
        ],
      };
    case DELETE_EXPERIENCE:
      return {
        ...inputList,
        experiences: [
          ...inputList.experiences.filter((_, i) => i !== action.payload),
        ],
      };
    case ADD_COMPETENCE:
      return {
        ...inputList,
        competences: [...inputList.competences, action.payload],
      };
    case EDIT_COMPETENCE:
      return {
        ...inputList,
        competences: [
          ...inputList.competences.map((competence, i) =>
            i === action.payload.itemIndex
              ? action.payload.competence
              : competence
          ),
        ],
      };
    case DELETE_COMPETENCE:
      return {
        ...inputList,
        competences: [
          ...inputList.competences.filter((_, i) => i !== action.payload),
        ],
      };
    case ADD_PROJECT:
      return {
        ...inputList,
        projects: [...inputList.projects, action.payload],
      };
    case EDIT_PROJECT:
      return {
        ...inputList,
        projects: [
          ...inputList.projects.map((project, i) =>
            i === action.payload.itemIndex ? action.payload.project : project
          ),
        ],
      };
    case DELETE_PROJECT:
      return {
        ...inputList,
        projects: [
          ...inputList.projects.filter((_, i) => i !== action.payload),
        ],
      };
    default:
      return inputList;
  }
};

export default inputListReducer;

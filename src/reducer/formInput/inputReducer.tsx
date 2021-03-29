import {
  ADD_PHOTO,
  DELETE_PHOTO,
  CHANGE_USER_DATA,
  CHANGE_ADDRESS,
  CHANGE_CONTACT,
  CHANGE_LANGUAGE,
  CLEAR_LANGUAGE,
  SEND_LANGUAGE,
  CHANGE_STRENGTH,
  CLEAR_STRENGTH,
  SEND_STRENGTH,
  CHANGE_HOBBY,
  CLEAR_HOBBY,
  SEND_HOBBY,
  CLEAR_END_SCHOOL_PERIOD,
  CHANGE_SCHOOL_START,
  CHANGE_SCHOOL_END,
  CHANGE_DIPLOMA,
  CLEAR_DIPLOMA,
  SEND_DIPLOMA,
  CLEAR_END_COMPANY_PERIOD,
  CHANGE_COMPANY_START,
  CHANGE_COMPANY_END,
  CHANGE_EXPERIENCE,
  CLEAR_EXPERIENCE,
  SEND_EXPERIENCE,
  CHANGE_COMPETENCE,
  CLEAR_COMPETENCE,
  SEND_COMPETENCE,
  CHANGE_GITHUB,
  CHANGE_PROJECT,
  CLEAR_PROJECT,
  SEND_PROJECT,
  InputFormActions,
} from "./inputActionTypes";
import { FormInputTypes } from "../../hooks/form/formTypes";
import { capitalize, capitalizeLetters } from "../../methods/capitalize";

const inputReducer = (
  inputs: FormInputTypes,
  action: InputFormActions
): FormInputTypes => {
  switch (action.type) {
    case ADD_PHOTO:
      return { ...inputs, photo: action.payload };
    case DELETE_PHOTO:
      return { ...inputs, photo: action.payload };
    case CHANGE_USER_DATA:
      return {
        ...inputs,
        userData: {
          ...inputs.userData,
          [action.payload.targetName]: capitalize(action.payload.targetValue),
        },
      };
    case CHANGE_ADDRESS:
      return {
        ...inputs,
        userData: {
          ...inputs.userData,
          address: {
            ...inputs.userData.address,
            [action.payload.targetName]:
              action.payload.targetName === "street"
                ? capitalize(
                    action.payload.targetValue.replace(/[^a-zA-Z\s]/g, "")
                  )
                : action.payload.targetName === "streetNumber"
                ? capitalizeLetters(
                    action.payload.targetValue.replace(/[^a-zA-Z\d]/g, "")
                  )
                : action.payload.targetName === "flatNumber"
                ? action.payload.targetValue.replace(/[^\d]/g, "")
                : action.payload.targetName === "postCode"
                ? action.payload.targetValue.replace(
                    /[^\d-]|^([^\d]|\d{3,})|(-{2,})|(\d{4,})$/g,
                    ""
                  )
                : action.payload.targetName === "city"
                ? capitalize(
                    action.payload.targetValue.replace(/[^a-zA-Z\s]/g, "")
                  )
                : action.payload.targetValue,
          },
        },
      };
    case CHANGE_CONTACT:
      return {
        ...inputs,
        userData: {
          ...inputs.userData,
          contact: {
            ...inputs.userData.contact,
            [action.payload.targetName]:
              action.payload.targetName === "tel"
                ? action.payload.targetValue.replace(/[^\d]/g, "")
                : action.payload.targetValue,
          },
        },
      };
    case CHANGE_LANGUAGE:
      return {
        ...inputs,
        language: {
          ...inputs.language,
          [action.payload.targetName]: action.payload.targetValue,
        },
      };
    case CLEAR_LANGUAGE:
      return {
        ...inputs,
        language: { name: action.payload.name, level: action.payload.level },
      };
    case SEND_LANGUAGE:
      return {
        ...inputs,
        language: { name: action.payload.name, level: action.payload.level },
      };
    case CHANGE_STRENGTH:
      return {
        ...inputs,
        [action.payload.targetName]: action.payload.targetValue.replace(
          /[^a-z\s]/g,
          ""
        ),
      };
    case CLEAR_STRENGTH:
      return { ...inputs, strength: action.payload };
    case SEND_STRENGTH:
      return { ...inputs, strength: action.payload };
    case CHANGE_HOBBY:
      return {
        ...inputs,
        [action.payload.targetName]: action.payload.targetValue.replace(
          /[^a-z\s]/g,
          ""
        ),
      };
    case CLEAR_HOBBY:
      return { ...inputs, hobby: action.payload };
    case SEND_HOBBY:
      return { ...inputs, hobby: action.payload };
    case CLEAR_END_SCHOOL_PERIOD:
      return {
        ...inputs,
        diploma: { ...inputs.diploma, endPeriod: action.payload },
      };
    case CHANGE_SCHOOL_START:
      return {
        ...inputs,
        diploma: {
          ...inputs.diploma,
          startPeriod: {
            ...inputs.diploma.startPeriod,
            [action.payload.targetName]: action.payload.targetValue,
          },
        },
      };
    case CHANGE_SCHOOL_END:
      return {
        ...inputs,
        diploma: {
          ...inputs.diploma,
          endPeriod: {
            ...inputs.diploma.endPeriod,
            [action.payload.targetName]: action.payload.targetValue,
          },
        },
      };
    case CHANGE_DIPLOMA:
      return {
        ...inputs,
        diploma: {
          ...inputs.diploma,
          [action.payload.targetName]: action.payload.targetValue,
        },
      };
    case CLEAR_DIPLOMA:
      return { ...inputs, diploma: action.payload };
    case SEND_DIPLOMA:
      return { ...inputs, diploma: action.payload };
    case CLEAR_END_COMPANY_PERIOD:
      return {
        ...inputs,
        experience: { ...inputs.experience, endPeriod: action.payload },
      };
    case CHANGE_COMPANY_START:
      return {
        ...inputs,
        experience: {
          ...inputs.experience,
          startPeriod: {
            ...inputs.experience.startPeriod,
            [action.payload.targetName]: action.payload.targetValue,
          },
        },
      };
    case CHANGE_COMPANY_END:
      return {
        ...inputs,
        experience: {
          ...inputs.experience,
          endPeriod: {
            ...inputs.experience.endPeriod,
            [action.payload.targetName]: action.payload.targetValue,
          },
        },
      };
    case CHANGE_EXPERIENCE:
      return {
        ...inputs,
        experience: {
          ...inputs.experience,
          [action.payload.targetName]: action.payload.targetValue,
        },
      };
    case CLEAR_EXPERIENCE:
      return { ...inputs, experience: action.payload };
    case SEND_EXPERIENCE:
      return { ...inputs, experience: action.payload };
    case CHANGE_COMPETENCE:
      return {
        ...inputs,
        [action.payload.targetName]: action.payload.targetValue.replace(
          /[^a-z\s]/g,
          ""
        ),
      };
    case CLEAR_COMPETENCE:
      return { ...inputs, competence: action.payload };
    case SEND_COMPETENCE:
      return { ...inputs, competence: action.payload };
    case CHANGE_GITHUB:
      return {
        ...inputs,
        [action.payload.targetName]: action.payload.targetValue,
      };
    case CHANGE_PROJECT:
      return {
        ...inputs,
        project: {
          ...inputs.project,
          [action.payload.targetName]: action.payload.targetValue,
        },
      };
    case CLEAR_PROJECT:
      return { ...inputs, project: action.payload };
    case SEND_PROJECT:
      return { ...inputs, project: action.payload };
    default:
      return inputs;
  }
};

export default inputReducer;

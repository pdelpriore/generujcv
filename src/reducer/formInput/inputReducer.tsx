import {
  ADD_PHOTO,
  DELETE_PHOTO,
  CHANGE_USER_DATA,
  CHANGE_ADDRESS,
  CHANGE_CONTACT,
  CHANGE_BIRTHDAY,
  CHANGE_LANGUAGE,
  CLEAR_LANGUAGE,
  SEND_LANGUAGE,
  CHANGE_STRENGTH,
  InputFormActions,
} from "./inputActionTypes";
import { FormInputTypes } from "../../hooks/form/formTypes";

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
          [action.payload.targetName]:
            action.payload.targetName === "drivingLicence"
              ? action.payload.targetValue
                  .replace(/[^A-Z1-2,+\s]/g, "")
                  .split(/\s*,\s*/)
              : action.payload.targetValue,
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
              action.payload.targetName === "postCode"
                ? action.payload.targetValue.replace(
                    /[^\d-]|[\d]{2}[^-]{1}[\d]{1}/g,
                    ""
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
            [action.payload.targetName]: action.payload.targetValue,
          },
        },
      };
    case CHANGE_BIRTHDAY:
      return {
        ...inputs,
        userData: {
          ...inputs.userData,
          birthday: {
            ...inputs.userData.birthday,
            [action.payload.targetName]: action.payload.targetValue,
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
    default:
      return inputs;
  }
};

export default inputReducer;

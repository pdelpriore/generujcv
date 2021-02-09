import { language, diploma } from "../../hooks/form/formTypes";

export const ADD_PHOTO = "add_photo";
export const DELETE_PHOTO = "delete_photo";

export const CHANGE_USER_DATA = "change_user_data";
export const CHANGE_ADDRESS = "change_address";
export const CHANGE_CONTACT = "change_contact";
export const CHANGE_BIRTHDAY = "change_birthday";

export const CHANGE_LANGUAGE = "change_language";
export const CLEAR_LANGUAGE = "add_language";
export const SEND_LANGUAGE = "send_language";

export const CHANGE_STRENGTH = "change_strength";
export const CLEAR_STRENGTH = "clear_strength";
export const SEND_STRENGTH = "send_strength";

export const CHANGE_HOBBY = "change_hobby";
export const CLEAR_HOBBY = "clear_hobby";
export const SEND_HOBBY = "send_hobby";

export const CHANGE_SCHOOL_START = "change_school_start";
export const CHANGE_SCHOOL_END = "change_school_end";
export const CHANGE_DIPLOMA = "change_diploma";
export const CLEAR_DIPLOMA = "clear_diploma";
export const SEND_DIPLOMA = "send_diploma";

type TChange = {
  targetName: string;
  targetValue: string;
};

interface AddPhotoAction {
  type: typeof ADD_PHOTO;
  payload: string;
}

interface DeletePhotoAction {
  type: typeof DELETE_PHOTO;
  payload: string;
}

interface ChangeUserDataAction {
  type: typeof CHANGE_USER_DATA;
  payload: TChange;
}

interface ChangeUserAddressAction {
  type: typeof CHANGE_ADDRESS;
  payload: TChange;
}

interface ChangeUserContactAction {
  type: typeof CHANGE_CONTACT;
  payload: TChange;
}

interface ChangeUserBirthdayAction {
  type: typeof CHANGE_BIRTHDAY;
  payload: TChange;
}

interface ChangeUserLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: TChange;
}

interface ClearLanguageAction {
  type: typeof CLEAR_LANGUAGE;
  payload: language;
}

interface SendUserLanguageAction {
  type: typeof SEND_LANGUAGE;
  payload: language;
}

interface ChangeStrengthAction {
  type: typeof CHANGE_STRENGTH;
  payload: TChange;
}

interface ClearStrengthAction {
  type: typeof CLEAR_STRENGTH;
  payload: string;
}

interface SendStrengthAction {
  type: typeof SEND_STRENGTH;
  payload: string;
}

interface ChangeHobbyAction {
  type: typeof CHANGE_HOBBY;
  payload: TChange;
}

interface ClearHobbyAction {
  type: typeof CLEAR_HOBBY;
  payload: string;
}

interface SendHobbyAction {
  type: typeof SEND_HOBBY;
  payload: string;
}

interface ChangeSchoolStartAction {
  type: typeof CHANGE_SCHOOL_START;
  payload: TChange;
}

interface ChangeSchoolEndAction {
  type: typeof CHANGE_SCHOOL_END;
  payload: TChange;
}

interface ChangeDiplomaAction {
  type: typeof CHANGE_DIPLOMA;
  payload: TChange;
}

interface ClearDiplomaAction {
  type: typeof CLEAR_DIPLOMA;
  payload: diploma;
}

interface SendDiplomaAction {
  type: typeof SEND_DIPLOMA;
  payload: diploma;
}

export type InputFormActions =
  | AddPhotoAction
  | DeletePhotoAction
  | ChangeUserDataAction
  | ChangeUserAddressAction
  | ChangeUserContactAction
  | ChangeUserBirthdayAction
  | ChangeUserLanguageAction
  | ClearLanguageAction
  | SendUserLanguageAction
  | ChangeStrengthAction
  | ClearStrengthAction
  | SendStrengthAction
  | ChangeHobbyAction
  | ClearHobbyAction
  | SendHobbyAction
  | ChangeSchoolStartAction
  | ChangeSchoolEndAction
  | ChangeDiplomaAction
  | ClearDiplomaAction
  | SendDiplomaAction;

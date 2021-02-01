import { language } from "../../hooks/form/formTypes";

export const ADD_PHOTO = "add_photo";
export const DELETE_PHOTO = "delete_photo";
export const CHANGE_USER_DATA = "change_user_data";
export const CHANGE_ADDRESS = "change_address";
export const CHANGE_CONTACT = "change_contact";
export const CHANGE_BIRTHDAY = "change_birthday";
export const CHANGE_LANGUAGE = "change_language";
export const CLEAR_LANGUAGE = "add_language";
export const SEND_LANGUAGE = "send_language";

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

export type InputFormActions =
  | AddPhotoAction
  | DeletePhotoAction
  | ChangeUserDataAction
  | ChangeUserAddressAction
  | ChangeUserContactAction
  | ChangeUserBirthdayAction
  | ChangeUserLanguageAction
  | ClearLanguageAction
  | SendUserLanguageAction;
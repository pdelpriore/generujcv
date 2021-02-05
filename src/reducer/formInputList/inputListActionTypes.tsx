import { language } from "../../hooks/form/formTypes";

export const ADD_LANGUAGE = "add_language";
export const EDIT_LANGUAGE = "edit_language";
export const DELETE_LANGUAGE = "delete_language";

export const ADD_STRENGTH = "add_strength";
export const EDIT_STRENGTH = "edit_strength";
export const DELETE_STRENGTH = "delete_strength";

export const ADD_HOBBY = "add_hobby";
export const EDIT_HOBBY = "edit_hobby";
export const DELETE_HOBBY = "delete_hobby";

type editLanguage = {
  itemIndex: number;
  language: language;
};

type editStrength = {
  itemIndex: number;
  strength: string;
};

type editHobby = {
  itemIndex: number;
  hobby: string;
};

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: language;
}

interface EditLanguageAction {
  type: typeof EDIT_LANGUAGE;
  payload: editLanguage;
}

interface DeleteLanguageAction {
  type: typeof DELETE_LANGUAGE;
  payload: number;
}

interface AddStrengthAction {
  type: typeof ADD_STRENGTH;
  payload: string;
}

interface EditStrengthAction {
  type: typeof EDIT_STRENGTH;
  payload: editStrength;
}

interface DeleteStrengthAction {
  type: typeof DELETE_STRENGTH;
  payload: number;
}

interface AddHobbyAction {
  type: typeof ADD_HOBBY;
  payload: string;
}

interface EditHobbyAction {
  type: typeof EDIT_HOBBY;
  payload: editHobby;
}

interface DeleteHobbyAction {
  type: typeof DELETE_HOBBY;
  payload: number;
}

export type InputListFormActions =
  | AddLanguageAction
  | EditLanguageAction
  | DeleteLanguageAction
  | AddStrengthAction
  | EditStrengthAction
  | DeleteStrengthAction
  | AddHobbyAction
  | EditHobbyAction
  | DeleteHobbyAction;

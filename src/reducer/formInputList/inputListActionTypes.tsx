import { language } from "../../hooks/form/formTypes";

export const ADD_LANGUAGE = "add_language";
export const EDIT_LANGUAGE = "edit_language";
export const DELETE_LANGUAGE = "delete_language";

export const ADD_STRENGTH = "add_strength";
export const EDIT_STRENGTH = "edit_strength";
export const DELETE_STRENGTH = "delete_strength";

type editLanguage = {
  itemIndex: number;
  language: language;
};

type editStrength = {
  itemIndex: number;
  strength: string;
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

export type InputListFormActions =
  | AddLanguageAction
  | EditLanguageAction
  | DeleteLanguageAction
  | AddStrengthAction
  | EditStrengthAction
  | DeleteStrengthAction;

import { language } from "../../hooks/form/formTypes";

export const ADD_LANGUAGE = "add_language";
export const EDIT_LANGUAGE = "edit_language";
export const DELETE_LANGUAGE = "delete_language";

export const ADD_STRENGTH = "add_strength";

type editLanguage = {
  itemIndex: number;
  language: language;
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

export type InputListFormActions =
  | AddLanguageAction
  | EditLanguageAction
  | DeleteLanguageAction
  | AddStrengthAction;

import { language, diploma, experience } from "../../hooks/form/formTypes";

export const ADD_LANGUAGE = "add_language";
export const EDIT_LANGUAGE = "edit_language";
export const DELETE_LANGUAGE = "delete_language";

export const ADD_STRENGTH = "add_strength";
export const EDIT_STRENGTH = "edit_strength";
export const DELETE_STRENGTH = "delete_strength";

export const ADD_HOBBY = "add_hobby";
export const EDIT_HOBBY = "edit_hobby";
export const DELETE_HOBBY = "delete_hobby";

export const ADD_DIPLOMA = "add_diploma";
export const EDIT_DIPLOMA = "edit_diploma";
export const DELETE_DIPLOMA = "delete_diploma";

export const ADD_EXPERIENCE = "add_experience";
export const EDIT_EXPERIENCE = "edit_experience";
export const DELETE_EXPERIENCE = "delete_experience";

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

type editDiploma = {
  itemIndex: number;
  diploma: diploma;
};

type editExperience = {
  itemIndex: number;
  experience: experience;
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

interface AddDiplomaAction {
  type: typeof ADD_DIPLOMA;
  payload: diploma;
}

interface EditDiplomaAction {
  type: typeof EDIT_DIPLOMA;
  payload: editDiploma;
}

interface DeleteDiplomaAction {
  type: typeof DELETE_DIPLOMA;
  payload: number;
}

interface AddExperienceAction {
  type: typeof ADD_EXPERIENCE;
  payload: experience;
}

interface EditExperienceAction {
  type: typeof EDIT_EXPERIENCE;
  payload: editExperience;
}

interface DeleteExperienceAction {
  type: typeof DELETE_EXPERIENCE;
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
  | DeleteHobbyAction
  | AddDiplomaAction
  | EditDiplomaAction
  | DeleteDiplomaAction
  | AddExperienceAction
  | EditExperienceAction
  | DeleteExperienceAction;

import {
  language,
  diploma,
  experience,
  project,
} from "../../hooks/form/formTypes";

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

export const ADD_COMPETENCE = "add_competence";
export const EDIT_COMPETENCE = "edit_competence";
export const DELETE_COMPETENCE = "delete_competence";

export const ADD_PROJECT = "add_project";
export const EDIT_PROJECT = "edit_project";
export const DELETE_PROJECT = "delete_project";

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

type editCompetence = {
  itemIndex: number;
  competence: string;
};

type editProject = {
  itemIndex: number;
  project: project;
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

interface AddCompetenceAction {
  type: typeof ADD_COMPETENCE;
  payload: string;
}

interface EditCompetenceAction {
  type: typeof EDIT_COMPETENCE;
  payload: editCompetence;
}

interface DeleteCompetenceAction {
  type: typeof DELETE_COMPETENCE;
  payload: number;
}

interface AddProjectAction {
  type: typeof ADD_PROJECT;
  payload: project;
}

interface EditProjectAction {
  type: typeof EDIT_PROJECT;
  payload: editProject;
}

interface DeleteProjectAction {
  type: typeof DELETE_PROJECT;
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
  | DeleteExperienceAction
  | AddCompetenceAction
  | EditCompetenceAction
  | DeleteCompetenceAction
  | AddProjectAction
  | EditProjectAction
  | DeleteProjectAction;

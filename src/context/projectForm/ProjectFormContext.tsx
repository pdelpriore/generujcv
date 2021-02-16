import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;
type TClear = () => void;

interface ProjectFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isProjectEditing: boolean;
  onChangeGithub: TOnchange;
  onChangeProject: TOnchange;
  addProject: TOnclick;
  sendProjectToEdit: TOnclickWithIndex;
  editProject: TOnclick;
  cancelEditProject: TOnclick;
  deleteProject: TOnclickWithIndex;
  clearForm: TClear;
}

export const ProjectFormContext = createContext(
  {} as ProjectFormContextInterface
);

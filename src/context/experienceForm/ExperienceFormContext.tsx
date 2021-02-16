import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;
type TClear = () => void;

interface ExperienceFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isExperienceEditing: boolean;
  isFieldChecked: boolean;
  onChangeCheckingField: TOnchange;
  onChangeCompanyStart: TOnchange;
  onChangeCompanyEnd: TOnchange;
  onChangeExperience: TOnchange;
  addExperience: TOnclick;
  sendExperienceToEdit: TOnclickWithIndex;
  editExperience: TOnclick;
  cancelEditExperience: TOnclick;
  deleteExperience: TOnclickWithIndex;
  clearForm: TClear;
}

export const ExperienceFormContext = createContext(
  {} as ExperienceFormContextInterface
);

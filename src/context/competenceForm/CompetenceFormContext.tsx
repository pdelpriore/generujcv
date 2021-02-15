import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;

interface CompetenceFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isCompetenceEditing: boolean;
  onChangeCompetence: TOnchange;
  addCompetence: TOnclick;
  sendCompetenceToEdit: TOnclickWithIndex;
  editCompetence: TOnclick;
  cancelEditCompetence: TOnclick;
  deleteCompetence: TOnclickWithIndex;
}

export const CompetenceFormContext = createContext(
  {} as CompetenceFormContextInterface
);
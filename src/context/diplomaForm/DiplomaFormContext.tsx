import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;

interface DiplomaFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isDiplomaEditing: boolean;
  isFieldChecked: boolean;
  onChangeCheckingField: TOnchange;
  onChangeSchoolStart: TOnchange;
  onChangeSchoolEnd: TOnchange;
  onChangeDiploma: TOnchange;
  addDiploma: TOnclick;
  sendDiplomaToEdit: TOnclickWithIndex;
  editDiploma: TOnclick;
  cancelEditDiploma: TOnclick;
  deleteDiploma: TOnclickWithIndex;
}

export const DiplomaFormContext = createContext(
  {} as DiplomaFormContextInterface
);

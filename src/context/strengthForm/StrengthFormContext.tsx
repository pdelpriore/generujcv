import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;
type TClear = () => void;

interface StrengthFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isStrengthEditing: boolean;
  onChangeStrength: TOnchange;
  addStrength: TOnclick;
  sendStrengthToEdit: TOnclickWithIndex;
  editStrength: TOnclick;
  cancelEditStrength: TOnclick;
  deleteStrength: TOnclickWithIndex;
  clearForm: TClear;
  formIndex: number;
}

export const StrengthFormContext = createContext(
  {} as StrengthFormContextInterface
);

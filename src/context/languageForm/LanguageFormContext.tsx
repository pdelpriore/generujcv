import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;
type TClear = () => void;

interface LanguageFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isLanguageEditing: boolean;
  onChangeLanguage: TOnchange;
  addLanguage: TOnclick;
  sendLanguageToEdit: TOnclickWithIndex;
  editLanguage: TOnclick;
  cancelEditLanguage: TOnclick;
  deleteLanguage: TOnclickWithIndex;
  clearForm: TClear;
  formIndex: number;
}

export const LanguageFormContext = createContext(
  {} as LanguageFormContextInterface
);

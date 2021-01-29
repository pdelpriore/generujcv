import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/useForm";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;

interface LanguageFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isLanguageEditing: boolean;
  onChangeLanguage: TOnchange;
  addLanguage: TOnclick;
  editLanguage: TOnclickWithIndex;
  editLanguageState: TOnclick;
  deleteLanguage: TOnclickWithIndex;
}

export const LanguageFormContext = createContext(
  {} as LanguageFormContextInterface
);

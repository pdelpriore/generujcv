import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/useForm";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface LanguageFormContext {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  onChangeLanguage: TOnchange;
  addLanguage: TOnclick;
  editLanguage: TOnclick;
  deleteLanguage: TOnclick;
}

export const LanguageFormContext = createContext({} as LanguageFormContext);

import React, { createContext } from "react";
import { FormInputTypes } from "../../hooks/form/useForm";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface LanguageFormContext {
  inputs: FormInputTypes;
  onChangeLanguage: TOnchange;
  addLanguage: TOnclick;
}

export const LanguageFormContext = createContext({} as LanguageFormContext);

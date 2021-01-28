import React, { createContext } from "react";
import { FormInputTypes } from "../../hooks/form/useForm";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TAddClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface LanguageFormContext {
  inputs: FormInputTypes;
  onChangeLanguage: TOnchange;
  addClick: TAddClick;
}

export const LanguageFormContext = createContext({} as LanguageFormContext);

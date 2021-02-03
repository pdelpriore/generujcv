import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;

interface StrengthFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
}

export const StrengthFormContext = createContext(
  {} as StrengthFormContextInterface
);

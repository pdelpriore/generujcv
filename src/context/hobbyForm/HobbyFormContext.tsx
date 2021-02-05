import React, { createContext } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TOnclickWithIndex = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;

interface HobbyFormContextInterface {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isHobbyEditing: boolean;
  onChangeHobby: TOnchange;
  addHobby: TOnclick;
  sendHobbyToEdit: TOnclickWithIndex;
  editHobby: TOnclick;
  cancelEditHobby: TOnclick;
  deleteHobby: TOnclickWithIndex;
}

export const HobbyFormContext = createContext({} as HobbyFormContextInterface);

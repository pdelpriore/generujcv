import { FormInputListType } from "../hooks/form/formTypes";

export const countListElements = (inputList: FormInputListType): number =>
  Object.values(inputList).filter((list) => list.length > 0).length;

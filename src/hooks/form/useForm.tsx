import { useState, useReducer } from "react";
import { makeImageBinary } from "../../methods/makeImageBinary";
import useLoader from "../loading/useLoader";
import inputListReducer from "../../reducer/formInputList/inputListReducer";
import inputReducer from "../../reducer/formInput/inputReducer";
import { FormInputTypes } from "./formTypes";
import {
  ADD_LANGUAGE,
  EDIT_LANGUAGE,
  DELETE_LANGUAGE,
} from "../../reducer/formInputList/inputListActionTypes";
import {
  ADD_PHOTO,
  DELETE_PHOTO,
  CHANGE_USER_DATA,
  CHANGE_ADDRESS,
  CHANGE_CONTACT,
  CHANGE_BIRTHDAY,
  CHANGE_LANGUAGE,
  DELETE_USER_LANGUAGE,
  SEND_LANGUAGE,
} from "../../reducer/formInput/inputActionTypes";

const useForm = (initialState: FormInputTypes) => {
  const [inputs, dispatchInput] = useReducer(inputReducer, initialState);

  const [inputList, dispatchInputList] = useReducer(inputListReducer, {
    languages: [],
    strengths: [],
    hobbies: [],
    diplomas: [],
    experiences: [],
    competences: [],
    projects: [],
  });

  const [loading, setLoader] = useLoader(false);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [itemIndex, setItemIndex] = useState<number>(0);

  const handleOnChangeUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_USER_DATA,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_ADDRESS,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_CONTACT,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_BIRTHDAY,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_LANGUAGE,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleAddLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({ type: ADD_LANGUAGE, payload: inputs.language });
    dispatchInput({
      type: DELETE_USER_LANGUAGE,
      payload: { name: "", level: "" },
    });
  };

  const handleSendLanguageToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: language } = inputList.languages;
    dispatchInput({
      type: SEND_LANGUAGE,
      payload: { name: language.name, level: language.level },
    });
  };

  const handleEditLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({
      type: EDIT_LANGUAGE,
      payload: { itemIndex: itemIndex, language: inputs.language },
    });
    dispatchInput({
      type: DELETE_USER_LANGUAGE,
      payload: { name: "", level: "" },
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({
      type: DELETE_USER_LANGUAGE,
      payload: { name: "", level: "" },
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatchInputList({ type: DELETE_LANGUAGE, payload: index });
  };

  const handlePicture = async (picture: File[]) => {
    if (picture.length > 0) {
      setLoader(true);
      const userPhoto: string = await makeImageBinary(picture);
      if (userPhoto) {
        setLoader(false);
        dispatchInput({ type: ADD_PHOTO, payload: userPhoto });
      }
    }
  };

  const handleDeletePicture = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({ type: DELETE_PHOTO, payload: "" });
  };

  console.log(inputs);
  console.log(inputList);

  return {
    inputs,
    inputList,
    loading,
    isEditing,
    handlePicture,
    handleDeletePicture,
    handleOnChangeUserData,
    handleOnChangeAddress,
    handleOnChangeContact,
    handleOnChangeBirthday,
    handleOnChangeLanguage,
    handleAddLanguage,
    handleSendLanguageToEdit,
    handleEditLanguage,
    handleCancelEditLanguage,
    handleDeleteLanguage,
  };
};

export default useForm;

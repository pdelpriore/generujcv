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
  ADD_STRENGTH,
  EDIT_STRENGTH,
  DELETE_STRENGTH,
  ADD_HOBBY,
  EDIT_HOBBY,
  DELETE_HOBBY,
} from "../../reducer/formInputList/inputListActionTypes";
import {
  ADD_PHOTO,
  DELETE_PHOTO,
  CHANGE_USER_DATA,
  CHANGE_ADDRESS,
  CHANGE_CONTACT,
  CHANGE_BIRTHDAY,
  CHANGE_LANGUAGE,
  CLEAR_LANGUAGE,
  SEND_LANGUAGE,
  CHANGE_STRENGTH,
  CLEAR_STRENGTH,
  SEND_STRENGTH,
  CHANGE_HOBBY,
  CLEAR_HOBBY,
  SEND_HOBBY,
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
      type: CLEAR_LANGUAGE,
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
      type: CLEAR_LANGUAGE,
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
      type: CLEAR_LANGUAGE,
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

  const handleOnChangeStrength = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_STRENGTH,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleAddStrength = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({ type: ADD_STRENGTH, payload: inputs.strength });
    dispatchInput({ type: CLEAR_STRENGTH, payload: "" });
  };

  const handleSendStrengthToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: strength } = inputList.strengths;
    dispatchInput({
      type: SEND_STRENGTH,
      payload: strength,
    });
  };

  const handleEditStrength = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({
      type: EDIT_STRENGTH,
      payload: { itemIndex: itemIndex, strength: inputs.strength },
    });
    dispatchInput({
      type: CLEAR_STRENGTH,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditStrength = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({
      type: CLEAR_STRENGTH,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteStrength = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatchInputList({ type: DELETE_STRENGTH, payload: index });
  };

  const handleOnChangeHobby = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_HOBBY,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleAddHobby = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({ type: ADD_HOBBY, payload: inputs.hobby });
    dispatchInput({ type: CLEAR_HOBBY, payload: "" });
  };

  const handleSendHobbyToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: hobby } = inputList.hobbies;
    dispatchInput({
      type: SEND_HOBBY,
      payload: hobby,
    });
  };

  const handleEditHobby = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({
      type: EDIT_HOBBY,
      payload: { itemIndex: itemIndex, hobby: inputs.hobby },
    });
    dispatchInput({
      type: CLEAR_HOBBY,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditHobby = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({
      type: CLEAR_HOBBY,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteHobby = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatchInputList({ type: DELETE_HOBBY, payload: index });
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
    handleOnChangeStrength,
    handleAddStrength,
    handleSendStrengthToEdit,
    handleEditStrength,
    handleCancelEditStrength,
    handleDeleteStrength,
    handleOnChangeHobby,
    handleAddHobby,
    handleSendHobbyToEdit,
    handleEditHobby,
    handleCancelEditHobby,
    handleDeleteHobby,
  };
};

export default useForm;

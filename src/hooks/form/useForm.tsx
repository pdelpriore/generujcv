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
  ADD_DIPLOMA,
  EDIT_DIPLOMA,
  DELETE_DIPLOMA,
  ADD_EXPERIENCE,
  EDIT_EXPERIENCE,
  DELETE_EXPERIENCE,
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
  CLEAR_END_SCHOOL_PERIOD,
  CHANGE_SCHOOL_START,
  CHANGE_SCHOOL_END,
  CHANGE_DIPLOMA,
  CLEAR_DIPLOMA,
  SEND_DIPLOMA,
  CLEAR_END_COMPANY_PERIOD,
  CHANGE_COMPANY_START,
  CHANGE_COMPANY_END,
  CHANGE_EXPERIENCE,
  CLEAR_EXPERIENCE,
  SEND_EXPERIENCE,
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
  const [isFieldChecked, setFieldChecked] = useState<boolean>(false);

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

  const handleCheckingSchoolField = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldChecked(e.target.checked);
    dispatchInput({
      type: CLEAR_END_SCHOOL_PERIOD,
      payload: { month: "", year: 0 },
    });
  };

  const handleOnChangeStartSchool = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.persist();
    dispatchInput({
      type: CHANGE_SCHOOL_START,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeEndSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_SCHOOL_END,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeDiploma = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_DIPLOMA,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleAddDiploma = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({ type: ADD_DIPLOMA, payload: inputs.diploma });
    dispatchInput({
      type: CLEAR_DIPLOMA,
      payload: {
        startPeriod: { month: "", year: 0 },
        endPeriod: { month: "", year: 0 },
        schoolName: "",
        faculty: "",
        degree: "",
        description: "",
      },
    });
    isFieldChecked && setFieldChecked(false);
  };

  const handleSendDiplomaToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: diploma } = inputList.diplomas;
    diploma.endPeriod.month.length === 0 &&
      diploma.endPeriod.year === 0 &&
      setFieldChecked(true);
    dispatchInput({
      type: SEND_DIPLOMA,
      payload: diploma,
    });
  };

  const handleEditDiploma = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({
      type: EDIT_DIPLOMA,
      payload: { itemIndex: itemIndex, diploma: inputs.diploma },
    });
    dispatchInput({
      type: CLEAR_DIPLOMA,
      payload: {
        startPeriod: { month: "", year: 0 },
        endPeriod: { month: "", year: 0 },
        schoolName: "",
        faculty: "",
        degree: "",
        description: "",
      },
    });
    isFieldChecked && setFieldChecked(false);
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditDiploma = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({
      type: CLEAR_DIPLOMA,
      payload: {
        startPeriod: { month: "", year: 0 },
        endPeriod: { month: "", year: 0 },
        schoolName: "",
        faculty: "",
        degree: "",
        description: "",
      },
    });
    isFieldChecked && setFieldChecked(false);
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteDiploma = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatchInputList({ type: DELETE_DIPLOMA, payload: index });
  };

  const handleCheckingCompanyField = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldChecked(e.target.checked);
    dispatchInput({
      type: CLEAR_END_COMPANY_PERIOD,
      payload: { month: "", year: 0 },
    });
  };

  const handleOnChangeStartCompany = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.persist();
    dispatchInput({
      type: CHANGE_COMPANY_START,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeEndCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_COMPANY_END,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_EXPERIENCE,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleAddExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({ type: ADD_EXPERIENCE, payload: inputs.experience });
    dispatchInput({
      type: CLEAR_EXPERIENCE,
      payload: {
        startPeriod: { month: "", year: 0 },
        endPeriod: { month: "", year: 0 },
        workplace: "",
        company: "",
        city: "",
        description: "",
      },
    });
    isFieldChecked && setFieldChecked(false);
  };

  const handleSendExperienceToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: experience } = inputList.experiences;
    experience.endPeriod.month.length === 0 &&
      experience.endPeriod.year === 0 &&
      setFieldChecked(true);
    dispatchInput({
      type: SEND_EXPERIENCE,
      payload: experience,
    });
  };

  const handleEditExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({
      type: EDIT_EXPERIENCE,
      payload: { itemIndex: itemIndex, experience: inputs.experience },
    });
    dispatchInput({
      type: CLEAR_EXPERIENCE,
      payload: {
        startPeriod: { month: "", year: 0 },
        endPeriod: { month: "", year: 0 },
        workplace: "",
        company: "",
        city: "",
        description: "",
      },
    });
    isFieldChecked && setFieldChecked(false);
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({
      type: CLEAR_EXPERIENCE,
      payload: {
        startPeriod: { month: "", year: 0 },
        endPeriod: { month: "", year: 0 },
        workplace: "",
        company: "",
        city: "",
        description: "",
      },
    });
    isFieldChecked && setFieldChecked(false);
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatchInputList({ type: DELETE_EXPERIENCE, payload: index });
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
    isFieldChecked,
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
    handleCheckingSchoolField,
    handleOnChangeStartSchool,
    handleOnChangeEndSchool,
    handleOnChangeDiploma,
    handleAddDiploma,
    handleSendDiplomaToEdit,
    handleEditDiploma,
    handleCancelEditDiploma,
    handleDeleteDiploma,
    handleCheckingCompanyField,
    handleOnChangeStartCompany,
    handleOnChangeEndCompany,
    handleOnChangeExperience,
    handleAddExperience,
    handleSendExperienceToEdit,
    handleEditExperience,
    handleCancelEditExperience,
    handleDeleteExperience,
  };
};

export default useForm;

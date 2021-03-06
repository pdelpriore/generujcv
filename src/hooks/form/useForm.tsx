import { useState, useReducer, useCallback } from "react";
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
  ADD_COMPETENCE,
  EDIT_COMPETENCE,
  DELETE_COMPETENCE,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "../../reducer/formInputList/inputListActionTypes";
import {
  ADD_PHOTO,
  DELETE_PHOTO,
  CHANGE_USER_DATA,
  CHANGE_ADDRESS,
  CHANGE_CONTACT,
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
  CHANGE_COMPETENCE,
  CLEAR_COMPETENCE,
  SEND_COMPETENCE,
  CHANGE_GITHUB,
  CHANGE_PROJECT,
  CLEAR_PROJECT,
  SEND_PROJECT,
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

  const clearLanguageForm = useCallback(() => {
    dispatchInput({
      type: CLEAR_LANGUAGE,
      payload: { name: "", level: "" },
    });
    setItemIndex(0);
    setIsEditing(false);
  }, []);

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

  const clearStrengthForm = useCallback(() => {
    dispatchInput({
      type: CLEAR_STRENGTH,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  }, []);

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

  const clearHobbyForm = useCallback(() => {
    dispatchInput({
      type: CLEAR_HOBBY,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  }, []);

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

  const clearDiplomaForm = useCallback(() => {
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
    setFieldChecked(false);
    setItemIndex(0);
    setIsEditing(false);
  }, []);

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
        jobPosition: "",
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
        jobPosition: "",
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
        jobPosition: "",
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

  const clearExperienceForm = useCallback(() => {
    dispatchInput({
      type: CLEAR_EXPERIENCE,
      payload: {
        startPeriod: { month: "", year: 0 },
        endPeriod: { month: "", year: 0 },
        jobPosition: "",
        company: "",
        city: "",
        description: "",
      },
    });
    setFieldChecked(false);
    setItemIndex(0);
    setIsEditing(false);
  }, []);

  const handleOnChangeCompetence = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_COMPETENCE,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleAddCompetence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({ type: ADD_COMPETENCE, payload: inputs.competence });
    dispatchInput({ type: CLEAR_COMPETENCE, payload: "" });
  };

  const handleSendCompetenceToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: competence } = inputList.competences;
    dispatchInput({
      type: SEND_COMPETENCE,
      payload: competence,
    });
  };

  const handleEditCompetence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({
      type: EDIT_COMPETENCE,
      payload: { itemIndex: itemIndex, competence: inputs.competence },
    });
    dispatchInput({
      type: CLEAR_COMPETENCE,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditCompetence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({
      type: CLEAR_COMPETENCE,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteCompetence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatchInputList({ type: DELETE_COMPETENCE, payload: index });
  };

  const clearCompetenceForm = useCallback(() => {
    dispatchInput({
      type: CLEAR_COMPETENCE,
      payload: "",
    });
    setItemIndex(0);
    setIsEditing(false);
  }, []);

  const handleOnChangeGithub = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_GITHUB,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleOnChangeProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    dispatchInput({
      type: CHANGE_PROJECT,
      payload: { targetName: e.target.name, targetValue: e.target.value },
    });
  };

  const handleAddProject = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({ type: ADD_PROJECT, payload: inputs.project });
    dispatchInput({
      type: CLEAR_PROJECT,
      payload: { name: "", url: "", description: "" },
    });
  };

  const handleSendProjectToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: project } = inputList.projects;
    dispatchInput({
      type: SEND_PROJECT,
      payload: project,
    });
  };

  const handleEditProject = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInputList({
      type: EDIT_PROJECT,
      payload: { itemIndex: itemIndex, project: inputs.project },
    });
    dispatchInput({
      type: CLEAR_PROJECT,
      payload: { name: "", url: "", description: "" },
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditProject = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatchInput({
      type: CLEAR_PROJECT,
      payload: { name: "", url: "", description: "" },
    });
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteProject = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatchInputList({ type: DELETE_PROJECT, payload: index });
  };

  const clearProjectForm = useCallback(() => {
    dispatchInput({
      type: CLEAR_PROJECT,
      payload: { name: "", url: "", description: "" },
    });
    setItemIndex(0);
    setIsEditing(false);
  }, []);

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
    handleOnChangeLanguage,
    handleAddLanguage,
    handleSendLanguageToEdit,
    handleEditLanguage,
    handleCancelEditLanguage,
    handleDeleteLanguage,
    clearLanguageForm,
    handleOnChangeStrength,
    handleAddStrength,
    handleSendStrengthToEdit,
    handleEditStrength,
    handleCancelEditStrength,
    handleDeleteStrength,
    clearStrengthForm,
    handleOnChangeHobby,
    handleAddHobby,
    handleSendHobbyToEdit,
    handleEditHobby,
    handleCancelEditHobby,
    handleDeleteHobby,
    clearHobbyForm,
    handleCheckingSchoolField,
    handleOnChangeStartSchool,
    handleOnChangeEndSchool,
    handleOnChangeDiploma,
    handleAddDiploma,
    handleSendDiplomaToEdit,
    handleEditDiploma,
    handleCancelEditDiploma,
    handleDeleteDiploma,
    clearDiplomaForm,
    handleCheckingCompanyField,
    handleOnChangeStartCompany,
    handleOnChangeEndCompany,
    handleOnChangeExperience,
    handleAddExperience,
    handleSendExperienceToEdit,
    handleEditExperience,
    handleCancelEditExperience,
    handleDeleteExperience,
    clearExperienceForm,
    handleOnChangeCompetence,
    handleAddCompetence,
    handleSendCompetenceToEdit,
    handleEditCompetence,
    handleCancelEditCompetence,
    handleDeleteCompetence,
    clearCompetenceForm,
    handleOnChangeGithub,
    handleOnChangeProject,
    handleAddProject,
    handleSendProjectToEdit,
    handleEditProject,
    handleCancelEditProject,
    handleDeleteProject,
    clearProjectForm,
  };
};

export default useForm;

import { useState, useReducer } from "react";
import { makeImageBinary } from "../../methods/makeImageBinary";
import useLoader from "../loading/useLoader";
import inputListReducer from "../../reducer/formInputList/inputListReducer";
import { FormInputTypes } from "./formTypes";
import {
  ADD_LANGUAGE,
  EDIT_LANGUAGE,
  DELETE_LANGUAGE,
} from "../../reducer/formInputList/inputListActionTypes";

const useForm = (initialState: FormInputTypes) => {
  const [inputs, setInputs] = useState(initialState);

  const [inputList, dispatch] = useReducer(inputListReducer, {
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
    setInputs((inputs) => ({
      ...inputs,
      userData: {
        ...inputs.userData,
        [e.target.name]:
          e.target.name === "drivingLicence"
            ? e.target.value.replace(/[^A-Z1-2,+\s]/g, "").split(/\s*,\s*/)
            : e.target.value,
      },
    }));
  };

  const handleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      userData: {
        ...inputs.userData,
        address: {
          ...inputs.userData.address,
          [e.target.name]:
            e.target.name === "postCode"
              ? e.target.value.replace(/[^\d-]|[\d]{2}[^-]{1}[\d]{1}/g, "")
              : e.target.value,
        },
      },
    }));
  };

  const handleOnChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      userData: {
        ...inputs.userData,
        contact: {
          ...inputs.userData.contact,
          [e.target.name]: e.target.value,
        },
      },
    }));
  };

  const handleOnChangeBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      userData: {
        ...inputs.userData,
        birthday: {
          ...inputs.userData.birthday,
          [e.target.name]: e.target.value,
        },
      },
    }));
  };

  const handleOnChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      language: { ...inputs.language, [e.target.name]: e.target.value },
    }));
  };

  const handleAddLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: ADD_LANGUAGE, payload: inputs.language });
    setInputs((inputs) => ({ ...inputs, language: { name: "", level: "" } }));
  };

  const handleSendLanguageToEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
    setItemIndex(index);
    const { [index]: language } = inputList.languages;
    setInputs((inputs) => ({
      ...inputs,
      language: { name: language.name, level: language.level },
    }));
  };

  const handleEditLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({
      type: EDIT_LANGUAGE,
      payload: { itemIndex: itemIndex, language: inputs.language },
    });
    setInputs((inputs) => ({ ...inputs, language: { name: "", level: "" } }));
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleCancelEditLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setInputs((inputs) => ({ ...inputs, language: { name: "", level: "" } }));
    setItemIndex(0);
    setIsEditing(false);
  };

  const handleDeleteLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    dispatch({ type: DELETE_LANGUAGE, payload: index });
  };

  const handlePicture = async (picture: File[]) => {
    if (picture.length > 0) {
      setLoader(true);
      const userPhoto: string = await makeImageBinary(picture);
      if (userPhoto) {
        setLoader(false);
        setInputs((inputs) => ({ ...inputs, photo: userPhoto }));
      }
    }
  };

  const handleDeletePicture = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    setInputs((inputs) => ({ ...inputs, photo: "" }));
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

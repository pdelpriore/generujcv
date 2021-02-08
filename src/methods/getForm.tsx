import CompetenceForm from "../components/form/competence/CompetenceForm";
import DiplomaForm from "../components/form/diploma/DiplomaForm";
import ExperienceForm from "../components/form/experience/ExperienceForm";
import HobbyForm from "../components/form/hobby/HobbyForm";
import LanguageForm from "../components/form/language/LanguageForm";
import PhotoForm from "../components/form/photo/PhotoForm";
import StrengthForm from "../components/form/strength/StrengthForm";
import UserDataForm from "../components/form/userData/UserDataForm";
import ProjectForm from "../components/form/project/ProjectForm";
import ContactForm from "../components/form/contact/ContactForm";
import useForm from "../hooks/form/useForm";
import { LanguageFormContext } from "../context/languageForm/LanguageFormContext";
import { StrengthFormContext } from "../context/strengthForm/StrengthFormContext";
import { HobbyFormContext } from "../context/hobbyForm/HobbyFormContext";

const GetForm = (index: number): JSX.Element => {
  const {
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
  } = useForm({
    photo: "",
    userData: {
      name: "",
      surname: "",
      address: {
        street: "",
        streetNumber: "",
        flatNumber: 0,
        postCode: "",
        city: "",
      },
      contact: {
        email: "",
        tel: 0,
        linkedinUrl: "",
      },
      birthday: { day: "", month: "", year: 0 },
      citizenship: "",
      drivingLicence: [],
      maritalStatus: "",
      disability: "",
    },
    language: {
      name: "",
      level: "",
    },
    strength: "",
    hobby: "",
    diploma: {
      startMonth: "",
      startYear: 0,
      endMonth: "",
      endYear: 0,
      schoolName: "",
      faculty: "",
      degree: "",
      description: "",
    },
    experience: {
      name: "",
      startMonth: "",
      startYear: 0,
      endMonth: "",
      endYear: 0,
      company: "",
      city: "",
      description: "",
    },
    competence: [],
    project: {
      name: "",
      url: "",
      description: "",
      githubUrl: "",
    },
  });

  const formArray = [
    <PhotoForm
      onChangePhoto={handlePicture}
      onDeletePhoto={handleDeletePicture}
      loading={loading}
      photo={inputs.photo}
    />,
    <UserDataForm
      inputs={inputs}
      onchange={handleOnChangeUserData}
      onchangeBirthday={handleOnChangeBirthday}
    />,
    <ContactForm
      inputs={inputs}
      onchangeAddress={handleOnChangeAddress}
      onchangeContact={handleOnChangeContact}
    />,
    <LanguageFormContext.Provider
      value={{
        inputs: inputs,
        inputList: inputList,
        isLanguageEditing: isEditing,
        onChangeLanguage: handleOnChangeLanguage,
        addLanguage: handleAddLanguage,
        sendLanguageToEdit: handleSendLanguageToEdit,
        editLanguage: handleEditLanguage,
        cancelEditLanguage: handleCancelEditLanguage,
        deleteLanguage: handleDeleteLanguage,
      }}
    >
      <LanguageForm />
    </LanguageFormContext.Provider>,
    <StrengthFormContext.Provider
      value={{
        inputs: inputs,
        inputList: inputList,
        isStrengthEditing: isEditing,
        onChangeStrength: handleOnChangeStrength,
        addStrength: handleAddStrength,
        sendStrengthToEdit: handleSendStrengthToEdit,
        editStrength: handleEditStrength,
        cancelEditStrength: handleCancelEditStrength,
        deleteStrength: handleDeleteStrength,
      }}
    >
      <StrengthForm />
    </StrengthFormContext.Provider>,
    <HobbyFormContext.Provider
      value={{
        inputs: inputs,
        inputList: inputList,
        isHobbyEditing: isEditing,
        onChangeHobby: handleOnChangeHobby,
        addHobby: handleAddHobby,
        sendHobbyToEdit: handleSendHobbyToEdit,
        editHobby: handleEditHobby,
        cancelEditHobby: handleCancelEditHobby,
        deleteHobby: handleDeleteHobby,
      }}
    >
      <HobbyForm />
    </HobbyFormContext.Provider>,
    <DiplomaForm />,
    <ExperienceForm />,
    <CompetenceForm />,
    <ProjectForm />,
  ];

  return formArray[index];
};

export default GetForm;

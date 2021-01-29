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

const GetForm = (index: number): JSX.Element => {
  const {
    inputs,
    inputList,
    loading,
    isEditing,
    handleOnChange,
    handlePicture,
    handleDeletePicture,
    handleOnChangeUserData,
    handleOnChangeAddress,
    handleOnChangeContact,
    handleOnChangeBirthday,
    handleOnChangeLanguage,
    handleAddLanguage,
    handleEditLanguage,
    handleEditLanguageState,
    handleDeleteLanguage,
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
    strength: [],
    hobby: [],
    diploma: {
      name: "",
      startMonth: "",
      startYear: 0,
      endMonth: "",
      endYear: 0,
      schoolName: "",
      city: "",
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
        editLanguage: handleEditLanguage,
        editLanguageState: handleEditLanguageState,
        deleteLanguage: handleDeleteLanguage,
      }}
    >
      <LanguageForm />
    </LanguageFormContext.Provider>,
    <StrengthForm />,
    <HobbyForm />,
    <DiplomaForm />,
    <ExperienceForm />,
    <CompetenceForm />,
    <ProjectForm />,
  ];

  return formArray[index];
};

export default GetForm;

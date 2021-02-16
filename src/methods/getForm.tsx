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
import { FormInputTypes, FormInputListType } from "../hooks/form/formTypes";
import { LanguageFormContext } from "../context/languageForm/LanguageFormContext";
import { StrengthFormContext } from "../context/strengthForm/StrengthFormContext";
import { HobbyFormContext } from "../context/hobbyForm/HobbyFormContext";
import { DiplomaFormContext } from "../context/diplomaForm/DiplomaFormContext";
import { ExperienceFormContext } from "../context/experienceForm/ExperienceFormContext";
import { CompetenceFormContext } from "../context/competenceForm/CompetenceFormContext";
import { ProjectFormContext } from "../context/projectForm/ProjectFormContext";

const GetForm = (
  index: number
): {
  form: JSX.Element;
  inputs: FormInputTypes;
  inputList: FormInputListType;
} => {
  const {
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
      startPeriod: { month: "", year: 0 },
      endPeriod: { month: "", year: 0 },
      schoolName: "",
      faculty: "",
      degree: "",
      description: "",
    },
    experience: {
      startPeriod: { month: "", year: 0 },
      endPeriod: { month: "", year: 0 },
      workplace: "",
      company: "",
      city: "",
      description: "",
    },
    competence: "",
    githubUrl: "",
    project: {
      name: "",
      url: "",
      description: "",
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
        clearForm: clearLanguageForm,
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
        clearForm: clearStrengthForm,
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
        clearForm: clearHobbyForm,
      }}
    >
      <HobbyForm />
    </HobbyFormContext.Provider>,
    <DiplomaFormContext.Provider
      value={{
        inputs: inputs,
        inputList: inputList,
        isDiplomaEditing: isEditing,
        isFieldChecked: isFieldChecked,
        onChangeCheckingField: handleCheckingSchoolField,
        onChangeSchoolStart: handleOnChangeStartSchool,
        onChangeSchoolEnd: handleOnChangeEndSchool,
        onChangeDiploma: handleOnChangeDiploma,
        addDiploma: handleAddDiploma,
        sendDiplomaToEdit: handleSendDiplomaToEdit,
        editDiploma: handleEditDiploma,
        cancelEditDiploma: handleCancelEditDiploma,
        deleteDiploma: handleDeleteDiploma,
        clearForm: clearDiplomaForm,
      }}
    >
      <DiplomaForm />
    </DiplomaFormContext.Provider>,
    <ExperienceFormContext.Provider
      value={{
        inputs: inputs,
        inputList: inputList,
        isExperienceEditing: isEditing,
        isFieldChecked: isFieldChecked,
        onChangeCheckingField: handleCheckingCompanyField,
        onChangeCompanyStart: handleOnChangeStartCompany,
        onChangeCompanyEnd: handleOnChangeEndCompany,
        onChangeExperience: handleOnChangeExperience,
        addExperience: handleAddExperience,
        sendExperienceToEdit: handleSendExperienceToEdit,
        editExperience: handleEditExperience,
        cancelEditExperience: handleCancelEditExperience,
        deleteExperience: handleDeleteExperience,
        clearForm: clearExperienceForm,
      }}
    >
      <ExperienceForm />
    </ExperienceFormContext.Provider>,
    <CompetenceFormContext.Provider
      value={{
        inputs: inputs,
        inputList: inputList,
        isCompetenceEditing: isEditing,
        onChangeCompetence: handleOnChangeCompetence,
        addCompetence: handleAddCompetence,
        sendCompetenceToEdit: handleSendCompetenceToEdit,
        editCompetence: handleEditCompetence,
        cancelEditCompetence: handleCancelEditCompetence,
        deleteCompetence: handleDeleteCompetence,
        clearForm: clearCompetenceForm,
      }}
    >
      <CompetenceForm />
    </CompetenceFormContext.Provider>,
    <ProjectFormContext.Provider
      value={{
        inputs: inputs,
        inputList: inputList,
        isProjectEditing: isEditing,
        onChangeGithub: handleOnChangeGithub,
        onChangeProject: handleOnChangeProject,
        addProject: handleAddProject,
        sendProjectToEdit: handleSendProjectToEdit,
        editProject: handleEditProject,
        cancelEditProject: handleCancelEditProject,
        deleteProject: handleDeleteProject,
        clearForm: clearProjectForm,
      }}
    >
      <ProjectForm />
    </ProjectFormContext.Provider>,
  ];

  return { form: formArray[index], inputs: inputs, inputList: inputList };
};

export default GetForm;

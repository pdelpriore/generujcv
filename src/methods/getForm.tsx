import CompetenceForm from "../components/form/competence/CompetenceForm";
import DiplomaForm from "../components/form/diploma/DiplomaForm";
import ExperienceForm from "../components/form/experience/ExperienceForm";
import HobbyForm from "../components/form/hobby/HobbyForm";
import LanguageForm from "../components/form/language/LanguageForm";
import PhotoForm from "../components/form/photo/PhotoForm";
import StrengthForm from "../components/form/strength/StrengthForm";
import UserDataForm from "../components/form/userData/UserDataForm";
import ProjectForm from "../components/form/project/ProjectForm";
import useForm from "../hooks/form/useForm";

const GetForm = (index: number): JSX.Element => {
  const {
    inputs,
    loading,
    handleOnChange,
    handlePicture,
    handleDeletePicture,
    handleOnChangeUserData,
    handleOnChangeAddress,
    handleOnChangeBirthday,
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
      birthday: { day: 0, month: "", year: 0 },
      citizenship: "",
      drivingLicence: [],
      email: "",
      tel: 0,
      linkedinUrl: "",
      githubUrl: "",
      maritalStatus: "",
      disability: "",
    },
    language: [],
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
    project: [],
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
      onchangeAddress={handleOnChangeAddress}
      onchangeBirthday={handleOnChangeBirthday}
    />,
    <LanguageForm />,
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

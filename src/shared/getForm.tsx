import CompetenceForm from "../components/form/competence/CompetenceForm";
import DiplomaForm from "../components/form/diploma/DiplomaForm";
import ExperienceForm from "../components/form/experience/ExperienceForm";
import HobbyForm from "../components/form/hobby/HobbyForm";
import LanguageForm from "../components/form/language/LanguageForm";
import PhotoForm from "../components/form/photo/PhotoForm";
import StrengthForm from "../components/form/strength/StrengthForm";
import UserDataForm from "../components/form/userData/UserDataForm";
import useForm from "../hooks/form/useForm";

const GetForm = (index: number): JSX.Element => {
  const { inputs, loading, handleOnChange, handlePicture } = useForm({
    photo: { binary: "" },
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
      tel: 0,
      maritalStatus: "",
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
  });

  const formArray = [
    <PhotoForm
      onChangePhoto={handlePicture}
      loading={loading}
      photo={inputs.photo.binary}
    />,
    <UserDataForm />,
    <LanguageForm />,
    <StrengthForm />,
    <HobbyForm />,
    <DiplomaForm />,
    <ExperienceForm />,
    <CompetenceForm />,
  ];

  return formArray[index];
};

export default GetForm;

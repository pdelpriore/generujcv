import { useState } from "react";
import { makeImageBinary } from "../../methods/makeImageBinary";
import useLoader from "../loading/useLoader";

type address = {
  street: string;
  streetNumber: string;
  flatNumber: number;
  postCode: string;
  city: string;
};

type birthday = {
  day: number;
  month: string;
  year: number;
};

type userdata = {
  name: string;
  surname: string;
  address: address;
  birthday: birthday;
  citizenship: string;
  drivingLicence: string[];
  email: string;
  tel: number;
  linkedinUrl: string;
  githubUrl: string;
  maritalStatus: string;
  disability: string;
};

type language = {
  name: string;
  level: string;
};

type diploma = {
  name: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  schoolName: string;
  city: string;
  description: string;
};

type experience = {
  name: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  company: string;
  city: string;
  description: string;
};

type project = {
  name: string;
  url: string;
  description: string;
};

interface InitialState {
  photo: string;
  userData: userdata;
  language: language[];
  strength: string[];
  hobby: string[];
  diploma: diploma;
  experience: experience;
  competence: string[];
  project: project[];
}

const useForm = (initialState: InitialState) => {
  const [inputs, setInputs] = useState(initialState);
  const [loading, setLoader] = useLoader(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleOnChangeUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      ...inputs.userData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      ...inputs.userData,
      ...inputs.userData.address,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnChangeBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      ...inputs.userData,
      ...inputs.userData.birthday,
      [e.target.name]: e.target.value,
    }));
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

  return {
    inputs,
    loading,
    handleOnChange,
    handlePicture,
    handleDeletePicture,
    handleOnChangeUserData,
    handleOnChangeAddress,
    handleOnChangeBirthday,
  };
};

export default useForm;

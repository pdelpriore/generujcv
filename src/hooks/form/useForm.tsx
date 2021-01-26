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

type contact = {
  email: string;
  tel: number;
  linkedinUrl: string;
};

type birthday = {
  day: string;
  month: string;
  year: number;
};

type userdata = {
  name: string;
  surname: string;
  address: address;
  contact: contact;
  birthday: birthday;
  citizenship: string;
  drivingLicence: string[];
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
  githubUrl: string;
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

export type FormInputTypes = InitialState;

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
              ? e.target.value.replace(/[^d{2}-\d{3}]/g, "")
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

  return {
    inputs,
    loading,
    handleOnChange,
    handlePicture,
    handleDeletePicture,
    handleOnChangeUserData,
    handleOnChangeAddress,
    handleOnChangeContact,
    handleOnChangeBirthday,
  };
};

export default useForm;

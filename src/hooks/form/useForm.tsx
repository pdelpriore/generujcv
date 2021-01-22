import { useState } from "react";
import { makeImageBinary } from "../../methods/makeImageBinary";
import useLoading from "../loading/useLoading";

type photo = {
  binary: string;
};

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
  maritalStatus: string;
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

interface InitialState {
  photo: photo;
  userData: userdata;
  language: language[];
  strength: string[];
  hobby: string[];
  diploma: diploma;
  experience: experience;
  competence: string[];
}

const useForm = (initialState: InitialState) => {
  const [inputs, setInputs] = useState(initialState);
  const [loading, setLoader] = useLoading(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handlePicture = async (picture: File[]) => {
    if (picture.length > 0) {
      setLoader(true);
      const userPhoto: string = await makeImageBinary(picture);
      if (userPhoto) {
        setLoader(false);
        setInputs((inputs) => ({ ...inputs, photo: { binary: userPhoto } }));
      }
    }
  };

  const handleDeletePicture = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    setInputs((inputs) => ({ ...inputs, photo: { binary: "" } }));
  };

  return {
    inputs,
    loading,
    handleOnChange,
    handlePicture,
    handleDeletePicture,
  };
};

export default useForm;

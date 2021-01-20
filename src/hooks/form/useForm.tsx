import { useState } from "react";

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
  month: number;
  year: number;
};

type userdata = {
  name: string;
  surname: string;
  address: address;
  birthday: birthday;
  citizenship: string;
  drivingLicence: string[];
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return [inputs, handleOnChange] as const;
};

export default useForm;

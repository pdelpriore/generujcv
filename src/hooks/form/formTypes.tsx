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

export type language = {
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

interface Input {
  photo: string;
  userData: userdata;
  language: language;
  strength: string;
  hobby: string[];
  diploma: diploma;
  experience: experience;
  competence: string[];
  project: project;
}

interface InputList {
  languages: language[];
  strengths: string[];
  hobbies: string[];
  diplomas: diploma[];
  experiences: experience[];
  competences: string[];
  projects: project[];
}

export type FormInputTypes = Input;
export type FormInputListType = InputList;

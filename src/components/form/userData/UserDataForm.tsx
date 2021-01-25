import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";

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

interface Inputs {
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

type THandleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface UserDataFormProps {
  inputs: Inputs;
  onchange: THandleOnchange;
  onchangeAddress: THandleOnchange;
  onchangeBirthday: THandleOnchange;
}

const UserDataForm: React.FC<UserDataFormProps> = ({
  inputs,
  onchange,
  onchangeAddress,
  onchangeBirthday,
}) => {
  return (
    <Form>
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          <Form.Group controlId="formUserData">
            <Form.Label>{capitalize("imię *")}</Form.Label>
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
              value={inputs.userData.name || ""}
              name="name"
              type="text"
              placeholder="imię"
            />
          </Form.Group>
        </Col>
        <Col xs={3} />
      </Row>
    </Form>
  );
};

export default UserDataForm;

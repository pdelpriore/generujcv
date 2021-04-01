import React from "react";
import { FormInputTypes } from "../../../hooks/form/formTypes";
import { Form } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";
import "./userDataForm.css";

type THandleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface UserDataFormProps {
  inputs: FormInputTypes;
  onchange: THandleOnchange;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ inputs, onchange }) => {
  return (
    <Form className="formUserData">
      <Form.Group controlId="formUserDataName">
        <Form.Label className="formUserData__label">
          {capitalize("imię *")}
        </Form.Label>
        <Form.Control
          className="formUserData__control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.name || ""}
          name="name"
          type="text"
          placeholder="imię"
        />
      </Form.Group>
      <Form.Group controlId="formUserDataSurname">
        <Form.Label className="formUserData__label">
          {capitalize("nazwisko *")}
        </Form.Label>
        <Form.Control
          className="formUserData__control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.surname || ""}
          name="surname"
          type="text"
          placeholder="nazwisko"
        />
      </Form.Group>
      <Form.Group controlId="formUserDataJobPosition">
        <Form.Label className="formUserData__label">
          {capitalize("stanowisko *")}
        </Form.Label>
        <Form.Control
          className="formUserData__control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.jobPosition || ""}
          name="jobPosition"
          type="text"
          placeholder="stanowisko"
        />
      </Form.Group>
    </Form>
  );
};

export default UserDataForm;

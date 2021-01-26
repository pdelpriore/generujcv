import React from "react";
import { FormInputTypes } from "../../../hooks/form/useForm";
import { Form } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";
import { days, months, birthdayYear } from "../../../shared/dateElements";
import "./userDataForm.css";

type THandleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface UserDataFormProps {
  inputs: FormInputTypes;
  onchange: THandleOnchange;
  onchangeBirthday: THandleOnchange;
}

const UserDataForm: React.FC<UserDataFormProps> = ({
  inputs,
  onchange,
  onchangeBirthday,
}) => {
  return (
    <Form className="formUserData">
      <Form.Group controlId="formUserDataName">
        <Form.Label>{capitalize("imię *")}</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.name || ""}
          name="name"
          type="text"
          placeholder="imię"
        />
      </Form.Group>
      <Form.Group controlId="formUserDataSurname">
        <Form.Label>{capitalize("nazwisko *")}</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.surname || ""}
          name="surname"
          type="text"
          placeholder="nazwisko"
        />
      </Form.Group>
      <Form.Group controlId="formUserDataBirthday">
        <Form.Label>{capitalize("data urodzin *")}</Form.Label>
        <div className="form__control-wrap">
          <Form.Control
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onchangeBirthday(e)
            }
            value={inputs.userData.birthday.day || ""}
            name="day"
            as="select"
          >
            <option disabled={true} value="">
              dzień
            </option>
            {days.map((day, index) => (
              <option key={index}>{day}</option>
            ))}
          </Form.Control>
          <Form.Control
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onchangeBirthday(e)
            }
            value={inputs.userData.birthday.month || ""}
            name="month"
            as="select"
          >
            <option disabled={true} value="">
              miesiąc
            </option>
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </Form.Control>
          <Form.Control
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onchangeBirthday(e)
            }
            value={inputs.userData.birthday.year || ""}
            name="year"
            as="select"
          >
            <option disabled={true} value="">
              rok
            </option>
            {birthdayYear.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </Form.Control>
        </div>
      </Form.Group>
    </Form>
  );
};

export default UserDataForm;

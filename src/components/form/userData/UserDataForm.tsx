import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/Store";
import { FormInputTypes } from "../../../hooks/form/formTypes";
import { Form } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";
import { days, months, birthdayYear } from "../../../shared/dateElements";
import { maritalStatus, disabilityLevel } from "../../../shared/menuElements";
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
  const { viewport } = useSelector((state: RootState) => state.viewportState);

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
      <Form.Group controlId="formUserDataBirthday">
        <Form.Label className="formUserData__label">
          {capitalize("data urodzenia *")}
        </Form.Label>
        <div className="form__control-wrap">
          <Form.Control
            className="formUserData__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onchangeBirthday(e)
            }
            value={inputs.userData.birthday.day || ""}
            name="day"
            as="select"
          >
            <option className="formUserData__option" disabled={true} value="">
              dzień
            </option>
            {days.map((day, index) => (
              <option className="formUserData__option" key={index}>
                {day}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            className="formUserData__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onchangeBirthday(e)
            }
            value={inputs.userData.birthday.month || ""}
            name="month"
            as="select"
          >
            <option className="formUserData__option" disabled={true} value="">
              {(viewport > 319 && viewport <= 374) ||
              (viewport > 374 && viewport <= 414) ||
              (viewport > 414 && viewport < 1024)
                ? "mies."
                : "miesiąc"}
            </option>
            {months.map((month, index) => (
              <option className="formUserData__option" key={index}>
                {month}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            className="formUserData__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onchangeBirthday(e)
            }
            value={inputs.userData.birthday.year || ""}
            name="year"
            as="select"
          >
            <option className="formUserData__option" disabled={true} value="">
              rok
            </option>
            {birthdayYear.map((year, index) => (
              <option className="formUserData__option" key={index}>
                {year}
              </option>
            ))}
          </Form.Control>
        </div>
      </Form.Group>
      <Form.Group controlId="formUserDataCitizenship">
        <Form.Label className="formUserData__label">
          {capitalize("obywatelstwo *")}
        </Form.Label>
        <Form.Control
          className="formUserData__control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.citizenship || ""}
          name="citizenship"
          type="text"
          placeholder="obywatelstwo"
        />
      </Form.Group>
      <Form.Group controlId="formUserDataDrivingLicence">
        <Form.Label className="formUserData__label">
          {capitalize("prawo jazdy")}
        </Form.Label>
        <Form.Control
          className="formUserData__control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.drivingLicence || ""}
          name="drivingLicence"
          type="text"
          placeholder="A,B,C+E,..."
        />
      </Form.Group>
      <Form.Group controlId="formUserDataMaritalStatus">
        <Form.Label className="formUserData__label">
          {capitalize("stan cywilny")}
        </Form.Label>
        <Form.Control
          className="formUserData__control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.maritalStatus || ""}
          name="maritalStatus"
          as="select"
        >
          <option className="formUserData__option" disabled={true} value="">
            stan cywilny
          </option>
          {maritalStatus.map((status, index) => (
            <option className="formUserData__option" key={index}>
              {status}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formUserDataDisability">
        <Form.Label className="formUserData__label">
          {capitalize("niepełnosprawność")}
        </Form.Label>
        <Form.Control
          className="formUserData__control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange(e)}
          value={inputs.userData.disability || ""}
          name="disability"
          as="select"
        >
          <option className="formUserData__option" disabled={true} value="">
            niepełnosprawność
          </option>
          {disabilityLevel.map((level, index) => (
            <option className="formUserData__option" key={index}>
              {level}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default UserDataForm;

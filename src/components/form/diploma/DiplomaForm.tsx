import React from "react";
import { Form } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";
import { months, schoolYear } from "../../../shared/dateElements";

const DiplomaForm: React.FC = () => {
  return (
    <Form className="formDiploma">
      <Form.Group controlId="formDiplomaSchoolStart">
        <Form.Label className="formDiploma__label">
          {capitalize("data rozpoczęcia")}
        </Form.Label>
        <div className="formDiploma__control-wrap">
          <Form.Control
            className="formDiploma__control"
            name="startMonth"
            as="select"
          >
            <option className="formDiploma__option" disabled={true} value="">
              miesiąc
            </option>
            {months.map((month, index) => (
              <option className="formDiploma__option" key={index}>
                {month}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            className="formDiploma__control"
            name="startYear"
            as="select"
          >
            <option className="formDiploma__option" disabled={true} value="">
              rok
            </option>
            {schoolYear.map((year, index) => (
              <option className="formDiploma__option" key={index}>
                {year}
              </option>
            ))}
          </Form.Control>
        </div>
      </Form.Group>
      <Form.Group controlId="formDiplomaSchoolEnd">
        <Form.Label className="formDiploma__label">
          {capitalize("data zakończenia")}
        </Form.Label>
        <div className="formDiploma__control-wrap">
          <Form.Control
            className="formDiploma__control"
            name="endMonth"
            as="select"
          >
            <option className="formDiploma__option" disabled={true} value="">
              miesiąc
            </option>
            {months.map((month, index) => (
              <option className="formDiploma__option" key={index}>
                {month}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            className="formDiploma__control"
            name="endYear"
            as="select"
          >
            <option className="formDiploma__option" disabled={true} value="">
              rok
            </option>
            {schoolYear.map((year, index) => (
              <option className="formDiploma__option" key={index}>
                {year}
              </option>
            ))}
          </Form.Control>
        </div>
      </Form.Group>
      <Form.Group controlId="formDiplomaSchoolName">
        <Form.Label className="formDiploma__label">
          {capitalize("nazwa szkoły")}
        </Form.Label>
        <Form.Control
          className="formDiploma__control"
          name="schoolName"
          type="text"
          placeholder="nazwa szkoły"
        />
      </Form.Group>
      <Form.Group controlId="formDiplomaFaculty">
        <Form.Label className="formDiploma__label">
          {capitalize("nazwa kierunku")}
        </Form.Label>
        <Form.Control
          className="formDiploma__control"
          name="faculty"
          type="text"
          placeholder="nazwa kierunku"
        />
      </Form.Group>
      <Form.Group controlId="formDiplomaDegree">
        <Form.Label className="formDiploma__label">
          {capitalize("uzyskany tytuł")}
        </Form.Label>
        <Form.Control
          className="formDiploma__control"
          name="degree"
          type="text"
          placeholder="technik informatyk, sprzedawca, inżynier, doktor, itd."
        />
      </Form.Group>
      <Form.Group controlId="formDiplomaDescription">
        <Form.Label className="formDiploma__label">
          {capitalize("opis")}
        </Form.Label>
        <Form.Control
          className="formDiploma__control"
          name="description"
          as="textarea"
          rows={4}
          type="text"
          placeholder="opis"
        />
      </Form.Group>
    </Form>
  );
};

export default DiplomaForm;

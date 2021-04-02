import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/Store";
import { DiplomaFormContext } from "../../../context/diplomaForm/DiplomaFormContext";
import { Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import DiplomaItem from "../../inputList/diplomaItem/DiplomaItem";
import { sortList } from "../../../methods/sortList";
import { capitalize } from "../../../methods/capitalize";
import { months, schoolYear } from "../../../shared/dateElements";
import "./diplomaForm.css";

const DiplomaForm: React.FC = () => {
  const {
    inputs,
    inputList,
    isDiplomaEditing,
    isFieldChecked,
    onChangeSchoolStart,
    onChangeSchoolEnd,
    onChangeDiploma,
    onChangeCheckingField,
    editDiploma,
    cancelEditDiploma,
    addDiploma,
    clearForm,
    formIndex,
  } = useContext(DiplomaFormContext);

  const { viewport } = useSelector((state: RootState) => state.viewportState);

  useEffect(() => {
    return () => {
      if (isDiplomaEditing) clearForm();
    };
  }, [isDiplomaEditing, formIndex, clearForm]);

  return (
    <>
      <Form className="formDiploma">
        <Form.Group controlId="formDiplomaSchoolStart">
          <Form.Label className="formDiploma__label">
            {capitalize("data rozpoczęcia")}
          </Form.Label>
          <div className="formDiploma__control-wrap">
            <Form.Control
              className="formDiploma__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSchoolStart(e)
              }
              value={inputs.diploma.startPeriod.month || ""}
              name="month"
              as="select"
            >
              <option className="formDiploma__option" disabled={true} value="">
                {viewport <= 414 ? "m." : "miesiąc"}
              </option>
              {months.map((month, index) => (
                <option className="formDiploma__option" key={index}>
                  {month}
                </option>
              ))}
            </Form.Control>
            <Form.Control
              className="formDiploma__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSchoolStart(e)
              }
              value={inputs.diploma.startPeriod.year || ""}
              name="year"
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSchoolEnd(e)
              }
              value={inputs.diploma.endPeriod.month || ""}
              name="month"
              as="select"
              disabled={isFieldChecked}
            >
              <option className="formDiploma__option" disabled={true} value="">
                {viewport <= 414 ? "m." : "miesiąc"}
              </option>
              {months.map((month, index) => (
                <option className="formDiploma__option" key={index}>
                  {month}
                </option>
              ))}
            </Form.Control>
            <Form.Control
              className="formDiploma__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSchoolEnd(e)
              }
              value={inputs.diploma.endPeriod.year || ""}
              name="year"
              as="select"
              disabled={isFieldChecked}
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
          <Form.Check
            className="formDiploma__checkbox"
            type="checkbox"
            label="jeszcze studiuję"
            onChange={onChangeCheckingField}
            checked={isFieldChecked}
          />
        </Form.Group>
        <Form.Group controlId="formDiplomaSchoolName">
          <Form.Label className="formDiploma__label">
            {capitalize("nazwa szkoły")}
          </Form.Label>
          <Form.Control
            className="formDiploma__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeDiploma(e)
            }
            value={inputs.diploma.schoolName || ""}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeDiploma(e)
            }
            value={inputs.diploma.faculty || ""}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeDiploma(e)
            }
            value={inputs.diploma.degree || ""}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeDiploma(e)
            }
            value={inputs.diploma.description || ""}
            name="description"
            as="textarea"
            rows={3}
            type="text"
            placeholder="opis"
          />
          <div className="formDiploma__btn-space" />
          {isDiplomaEditing ? (
            <div className="formDiploma__btn-wrapper">
              <TButton
                className="formDiploma__btn"
                type="add"
                content="popraw"
                onClick={editDiploma}
              />
              <TButton
                className="formDiploma__btn"
                type="cancel"
                content="anuluj"
                onClick={cancelEditDiploma}
              />
            </div>
          ) : (
            <div className="formDiploma__btn-wrapper">
              <TButton
                className="formDiploma__btn"
                disabled={
                  inputs.diploma.startPeriod.month.length === 0 ||
                  inputs.diploma.startPeriod.year === 0 ||
                  ((inputs.diploma.endPeriod.month.length === 0 ||
                    inputs.diploma.endPeriod.year === 0) &&
                    !isFieldChecked) ||
                  inputs.diploma.schoolName.length === 0 ||
                  inputs.diploma.faculty.length === 0 ||
                  inputs.diploma.degree.length === 0 ||
                  inputList.diplomas.length === 3
                }
                type="add"
                content="dodaj"
                onClick={addDiploma}
              />
            </div>
          )}
        </Form.Group>
      </Form>
      <div className="formDiploma__inputList">
        {inputList.diplomas.length > 0 && (
          <ListGroup variant="flush">
            {inputList.diplomas.sort(sortList).map((diploma, index) => (
              <DiplomaItem
                key={index}
                schoolStart={diploma.startPeriod}
                schoolEnd={diploma.endPeriod}
                schoolName={diploma.schoolName}
                faculty={diploma.faculty}
                degree={diploma.degree}
                description={diploma.description}
                index={index}
              />
            ))}
          </ListGroup>
        )}
      </div>
    </>
  );
};

export default DiplomaForm;

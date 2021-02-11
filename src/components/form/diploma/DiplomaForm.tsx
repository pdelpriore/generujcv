import React, { useContext } from "react";
import moment from "moment";
import { DiplomaFormContext } from "../../../context/diplomaForm/DiplomaFormContext";
import { Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import DiplomaItem from "../../inputList/diplomaItem/DiplomaItem";
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
  } = useContext(DiplomaFormContext);

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
                  inputs.diploma.description.length === 0 ||
                  inputList.diplomas.length === 5
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
            {inputList.diplomas
              .sort((schoolA, schoolB) => {
                let startSchoolA = moment([
                  schoolA.startPeriod.year,
                  parseInt(
                    schoolA.startPeriod.month.startsWith("0")
                      ? schoolA.startPeriod.month.substr(1)
                      : schoolA.startPeriod.month
                  ),
                  1,
                ]);
                let endSchoolA = moment(
                  schoolA.endPeriod.month.length === 0 &&
                    schoolA.endPeriod.year === 0
                    ? new Date()
                    : [
                        schoolA.endPeriod.year,
                        parseInt(
                          schoolA.endPeriod.month.startsWith("0")
                            ? schoolA.endPeriod.month.substr(1)
                            : schoolA.endPeriod.month
                        ),
                        1,
                      ]
                );

                let startSchoolB = moment([
                  schoolB.startPeriod.year,
                  parseInt(
                    schoolB.startPeriod.month.startsWith("0")
                      ? schoolB.startPeriod.month.substr(1)
                      : schoolB.startPeriod.month
                  ),
                  1,
                ]);
                let endSchoolB = moment(
                  schoolB.endPeriod.month.length === 0 &&
                    schoolB.endPeriod.year === 0
                    ? new Date()
                    : [
                        schoolB.endPeriod.year,
                        parseInt(
                          schoolB.endPeriod.month.startsWith("0")
                            ? schoolB.endPeriod.month.substr(1)
                            : schoolB.endPeriod.month
                        ),
                        1,
                      ]
                );

                let differenceInDaysSchoolA = endSchoolA.diff(
                  startSchoolA,
                  "days"
                );
                let differenceInDaysSchoolB = endSchoolB.diff(
                  startSchoolB,
                  "days"
                );

                return differenceInDaysSchoolA > differenceInDaysSchoolB
                  ? -1
                  : 1;
              })
              .map((diploma, index) => (
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

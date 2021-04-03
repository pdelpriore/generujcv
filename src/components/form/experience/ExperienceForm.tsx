import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/Store";
import { ExperienceFormContext } from "../../../context/experienceForm/ExperienceFormContext";
import { Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import ExperienceItem from "../../inputList/experienceItem/ExperienceItem";
import { sortList } from "../../../methods/sortList";
import { capitalize } from "../../../methods/capitalize";
import { months, experienceYear } from "../../../shared/dateElements";
import "./experienceForm.css";

const ExperienceForm: React.FC = () => {
  const {
    inputs,
    inputList,
    isExperienceEditing,
    isFieldChecked,
    onChangeCompanyStart,
    onChangeCompanyEnd,
    onChangeExperience,
    onChangeCheckingField,
    editExperience,
    cancelEditExperience,
    addExperience,
    clearForm,
    formIndex,
  } = useContext(ExperienceFormContext);

  const { viewport } = useSelector((state: RootState) => state.viewportState);

  useEffect(() => {
    return () => {
      if (isExperienceEditing) clearForm();
    };
  }, [isExperienceEditing, formIndex, clearForm]);

  return (
    <>
      <Form className="formExperience">
        <Form.Group controlId="formExperienceCompanyStart">
          <Form.Label className="formExperience__label">
            {capitalize("data rozpoczęcia")}
          </Form.Label>
          <div className="formExperience__control-wrap">
            <Form.Control
              className="formExperience__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeCompanyStart(e)
              }
              value={inputs.experience.startPeriod.month || ""}
              name="month"
              as="select"
            >
              <option
                className="formExperience__option"
                disabled={true}
                value=""
              >
                {viewport <= 414 ? "m." : "miesiąc"}
              </option>
              {months.map((month, index) => (
                <option className="formExperience__option" key={index}>
                  {month}
                </option>
              ))}
            </Form.Control>
            <Form.Control
              className="formExperience__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeCompanyStart(e)
              }
              value={inputs.experience.startPeriod.year || ""}
              name="year"
              as="select"
            >
              <option
                className="formExperience__option"
                disabled={true}
                value=""
              >
                rok
              </option>
              {experienceYear.map((year, index) => (
                <option className="formExperience__option" key={index}>
                  {year}
                </option>
              ))}
            </Form.Control>
          </div>
        </Form.Group>
        <Form.Group controlId="formExperienceCompanyEnd">
          <Form.Label className="formExperience__label">
            {capitalize("data zakończenia")}
          </Form.Label>
          <div className="formExperience__control-wrap">
            <Form.Control
              className="formExperience__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeCompanyEnd(e)
              }
              value={inputs.experience.endPeriod.month || ""}
              name="month"
              as="select"
              disabled={isFieldChecked}
            >
              <option
                className="formExperience__option"
                disabled={true}
                value=""
              >
                {viewport <= 414 ? "m." : "miesiąc"}
              </option>
              {months.map((month, index) => (
                <option className="formExperience__option" key={index}>
                  {month}
                </option>
              ))}
            </Form.Control>
            <Form.Control
              className="formExperience__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeCompanyEnd(e)
              }
              value={inputs.experience.endPeriod.year || ""}
              name="year"
              as="select"
              disabled={isFieldChecked}
            >
              <option
                className="formExperience__option"
                disabled={true}
                value=""
              >
                rok
              </option>
              {experienceYear.map((year, index) => (
                <option className="formExperience__option" key={index}>
                  {year}
                </option>
              ))}
            </Form.Control>
          </div>
          <Form.Check
            className="formExperience__checkbox"
            type="checkbox"
            label="nadal pracuję"
            onChange={onChangeCheckingField}
            checked={isFieldChecked}
          />
        </Form.Group>
        <Form.Group controlId="formExperienceJobPosition">
          <Form.Label className="formExperience__label">
            {capitalize("stanowisko")}
          </Form.Label>
          <Form.Control
            className="formExperience__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeExperience(e)
            }
            value={inputs.experience.jobPosition || ""}
            name="jobPosition"
            type="text"
            placeholder="stanowisko"
          />
        </Form.Group>
        <Form.Group controlId="formExperienceCompany">
          <Form.Label className="formExperience__label">
            {capitalize("nazwa firmy")}
          </Form.Label>
          <Form.Control
            className="formExperience__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeExperience(e)
            }
            value={inputs.experience.company || ""}
            name="company"
            type="text"
            placeholder="nazwa firmy"
          />
        </Form.Group>
        <Form.Group controlId="formExperienceCity">
          <Form.Label className="formExperience__label">
            {capitalize("miejscowość")}
          </Form.Label>
          <Form.Control
            className="formExperience__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeExperience(e)
            }
            value={inputs.experience.city || ""}
            name="city"
            type="text"
            placeholder="miejscowość"
          />
        </Form.Group>
        <Form.Group controlId="formExperienceDescription">
          <Form.Label className="formExperience__label">
            {capitalize("opis")}
          </Form.Label>
          <Form.Control
            className="formExperience__control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeExperience(e)
            }
            value={inputs.experience.description || ""}
            name="description"
            as="textarea"
            rows={3}
            type="text"
            placeholder="opis"
          />
          <div className="formExperience__btn-space" />
          {isExperienceEditing ? (
            <div className="formExperience__btn-wrapper">
              <TButton
                className="formExperience__btn"
                type="add"
                content="popraw"
                onClick={editExperience}
              />
              <TButton
                className="formExperience__btn"
                type="cancel"
                content="anuluj"
                onClick={cancelEditExperience}
              />
            </div>
          ) : (
            <div className="formExperience__btn-wrapper">
              <TButton
                className="formExperience__btn"
                disabled={
                  inputs.experience.startPeriod.month.length === 0 ||
                  inputs.experience.startPeriod.year === 0 ||
                  ((inputs.experience.endPeriod.month.length === 0 ||
                    inputs.experience.endPeriod.year === 0) &&
                    !isFieldChecked) ||
                  inputs.experience.jobPosition.length === 0 ||
                  inputs.experience.company.length === 0 ||
                  inputs.experience.city.length === 0 ||
                  inputList.experiences.length === 4
                }
                type="add"
                content="dodaj"
                onClick={addExperience}
              />
            </div>
          )}
        </Form.Group>
      </Form>
      <div className="formExperience__inputList">
        {inputList.experiences.length > 0 && (
          <ListGroup variant="flush">
            {inputList.experiences.sort(sortList).map((experience, index) => (
              <ExperienceItem
                key={index}
                companyStart={experience.startPeriod}
                companyEnd={experience.endPeriod}
                jobPosition={experience.jobPosition}
                company={experience.company}
                city={experience.city}
                description={experience.description}
                index={index}
              />
            ))}
          </ListGroup>
        )}
      </div>
    </>
  );
};

export default ExperienceForm;

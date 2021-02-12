import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/Store";
import { DiplomaFormContext } from "../../../context/diplomaForm/DiplomaFormContext";
import { Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import DiplomaItem from "../../inputList/diplomaItem/DiplomaItem";
import { sortList } from "../../../methods/sortList";
import { capitalize } from "../../../methods/capitalize";
import { months, schoolYear } from "../../../shared/dateElements";
import "./experienceForm.css";

const ExperienceForm: React.FC = () => {
  // const {
  //   inputs,
  //   inputList,
  //   isDiplomaEditing,
  //   isFieldChecked,
  //   onChangeSchoolStart,
  //   onChangeSchoolEnd,
  //   onChangeDiploma,
  //   onChangeCheckingField,
  //   editDiploma,
  //   cancelEditDiploma,
  //   addDiploma,
  // } = useContext(DiplomaFormContext);

  const { viewport } = useSelector((state: RootState) => state.viewportState);

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
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   onChangeSchoolStart(e)
              // }
              // value={inputs.diploma.startPeriod.month || ""}
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
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   onChangeSchoolStart(e)
              // }
              // value={inputs.diploma.startPeriod.year || ""}
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
              {schoolYear.map((year, index) => (
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
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   onChangeSchoolEnd(e)
              // }
              // value={inputs.diploma.endPeriod.month || ""}
              name="month"
              as="select"
              //disabled={isFieldChecked}
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
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   onChangeSchoolEnd(e)
              // }
              // value={inputs.diploma.endPeriod.year || ""}
              name="year"
              as="select"
              //disabled={isFieldChecked}
            >
              <option
                className="formExperience__option"
                disabled={true}
                value=""
              >
                rok
              </option>
              {schoolYear.map((year, index) => (
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
            // onChange={onChangeCheckingField}
            // checked={isFieldChecked}
          />
        </Form.Group>
        <Form.Group controlId="formExperienceWorkplace">
          <Form.Label className="formExperience__label">
            {capitalize("stanowisko")}
          </Form.Label>
          <Form.Control
            className="formExperience__control"
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   onChangeDiploma(e)
            // }
            // value={inputs.diploma.schoolName || ""}
            name="workplace"
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
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   onChangeDiploma(e)
            // }
            // value={inputs.diploma.faculty || ""}
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
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   onChangeDiploma(e)
            // }
            // value={inputs.diploma.degree || ""}
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
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   onChangeDiploma(e)
            // }
            // value={inputs.diploma.description || ""}
            name="description"
            as="textarea"
            rows={3}
            type="text"
            placeholder="opis"
          />
          <div className="formExperience__btn-space" />
          {false ? (
            <div className="formExperience__btn-wrapper">
              <TButton
                className="formExperience__btn"
                type="add"
                content="popraw"
                onClick={() => console.log("ok")}
              />
              <TButton
                className="formExperience__btn"
                type="cancel"
                content="anuluj"
                onClick={() => console.log("ok")}
              />
            </div>
          ) : (
            <div className="formExperience__btn-wrapper">
              <TButton
                className="formExperience__btn"
                // disabled={
                //   inputs.diploma.startPeriod.month.length === 0 ||
                //   inputs.diploma.startPeriod.year === 0 ||
                //   ((inputs.diploma.endPeriod.month.length === 0 ||
                //     inputs.diploma.endPeriod.year === 0) &&
                //     !isFieldChecked) ||
                //   inputs.diploma.schoolName.length === 0 ||
                //   inputs.diploma.faculty.length === 0 ||
                //   inputs.diploma.degree.length === 0 ||
                //   inputs.diploma.description.length === 0 ||
                //   inputList.diplomas.length === 5
                // }
                type="add"
                content="dodaj"
                onClick={() => console.log("ok")}
              />
            </div>
          )}
        </Form.Group>
      </Form>
      {/* <div className="formDiploma__inputList">
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
      </div> */}
    </>
  );
};

export default ExperienceForm;

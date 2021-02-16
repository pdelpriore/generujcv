import React, { useEffect, useContext } from "react";
import { CompetenceFormContext } from "../../../context/competenceForm/CompetenceFormContext";
import CompetenceItem from "../../inputList/competenceItem/CompetenceItem";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import { capitalizeFirst } from "../../../methods/capitalize";
import "./competenceForm.css";

const CompetenceForm: React.FC = () => {
  const {
    inputs,
    inputList,
    isCompetenceEditing,
    onChangeCompetence,
    addCompetence,
    editCompetence,
    cancelEditCompetence,
    clearForm,
  } = useContext(CompetenceFormContext);

  useEffect(() => {
    return () => {
      if (isCompetenceEditing) clearForm();
    };
  }, [isCompetenceEditing, clearForm]);

  return (
    <>
      <Row>
        <Col xl={3} xs={1} />
        <Col xl={6} xs={10}>
          <Form className="formCompetence">
            <Form.Group
              className="formCompetence__group"
              controlId="formCompetence"
            >
              <div className="formCompetence__group-wrap">
                <Form.Label className="formCompetence__label">
                  {capitalizeFirst("kompetencje")}
                </Form.Label>
                <Form.Control
                  className="formCompetence__control"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeCompetence(e)
                  }
                  value={inputs.competence || ""}
                  name="competence"
                  type="text"
                  placeholder="kompetencja"
                />
              </div>
              {isCompetenceEditing ? (
                <>
                  <TButton
                    className="formCompetence__btn"
                    type="add"
                    content="popraw"
                    onClick={editCompetence}
                  />
                  <TButton
                    className="formCompetence__btn"
                    type="cancel"
                    content="anuluj"
                    onClick={cancelEditCompetence}
                  />
                </>
              ) : (
                <TButton
                  className="formCompetence__btn"
                  disabled={
                    inputs.competence.length === 0 ||
                    inputList.competences.length === 10
                  }
                  type="add"
                  content="dodaj"
                  onClick={addCompetence}
                />
              )}
            </Form.Group>
          </Form>
        </Col>
        <Col xl={3} xs={1} />
      </Row>
      <Row className="mt-4" />
      <Row>
        <Col xl={3} xs={1} />
        <Col xl={6} xs={10}>
          {inputList.competences.length > 0 && (
            <ListGroup variant="flush">
              {inputList.competences.map((competence, index) => (
                <CompetenceItem
                  competence={competence}
                  key={index}
                  index={index}
                />
              ))}
            </ListGroup>
          )}
        </Col>
        <Col xl={3} xs={1} />
      </Row>
    </>
  );
};

export default CompetenceForm;

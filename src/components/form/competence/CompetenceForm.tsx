import React, { useContext } from "react";
import { HobbyFormContext } from "../../../context/hobbyForm/HobbyFormContext";
import HobbyItem from "../../inputList/hobbyItem/HobbyItem";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import { capitalizeFirst } from "../../../methods/capitalize";
import "./competenceForm.css";

const CompetenceForm: React.FC = () => {
  // const {
  //   inputs,
  //   inputList,
  //   isHobbyEditing,
  //   onChangeHobby,
  //   addHobby,
  //   editHobby,
  //   cancelEditHobby,
  // } = useContext(HobbyFormContext);

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
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //   onChangeHobby(e)
                  // }
                  // value={inputs.hobby || ""}
                  name="competence"
                  type="text"
                  placeholder="kompetencja"
                />
              </div>
              {false ? (
                <>
                  <TButton
                    className="formCompetence__btn"
                    type="add"
                    content="popraw"
                    onClick={() => console.log("ok")}
                  />
                  <TButton
                    className="formCompetence__btn"
                    type="cancel"
                    content="anuluj"
                    onClick={() => console.log("ok")}
                  />
                </>
              ) : (
                <TButton
                  className="formCompetence__btn"
                  // disabled={
                  //   inputs.hobby.length === 0 || inputList.hobbies.length === 5
                  // }
                  type="add"
                  content="dodaj"
                  onClick={() => console.log("ok")}
                />
              )}
            </Form.Group>
          </Form>
        </Col>
        <Col xl={3} xs={1} />
      </Row>
      <Row className="mt-4" />
      {/* <Row>
        <Col xl={3} xs={1} />
        <Col xl={6} xs={10}>
          {inputList.hobbies.length > 0 && (
            <ListGroup variant="flush">
              {inputList.hobbies.map((hobby, index) => (
                <HobbyItem hobby={hobby} key={index} index={index} />
              ))}
            </ListGroup>
          )}
        </Col>
        <Col xl={3} xs={1} />
      </Row> */}
    </>
  );
};

export default CompetenceForm;

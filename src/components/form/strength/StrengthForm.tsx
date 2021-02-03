import React, { useContext } from "react";
import { StrengthFormContext } from "../../../context/strengthForm/StrengthFormContext";
import StrengthItem from "../../inputList/strengthItem/StrengthItem";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import { capitalize } from "../../../methods/capitalize";
import "./strengthForm.css";

const StrengthForm: React.FC = () => {
  const {
    inputs,
    inputList,
    isStrengthEditing,
    onChangeStrength,
    addStrength,
    editStrength,
    cancelEditStrength,
  } = useContext(StrengthFormContext);

  return (
    <>
      <Row>
        <Col xl={3} />
        <Col xl={6}>
          <Form className="formStrength">
            <Form.Group
              className="formStrength__group"
              controlId="formStrength"
            >
              <div className="formStrength__group-wrap">
                <Form.Label className="formStrength__label">
                  {capitalize("mocne strony")}
                </Form.Label>
                <Form.Control
                  className="formStrength__control"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeStrength(e)
                  }
                  value={inputs.strength || ""}
                  name="strength"
                  type="text"
                  placeholder="mocna strona"
                />
              </div>
              {isStrengthEditing ? (
                <>
                  <TButton
                    className="formStrength__btn"
                    type="add"
                    content="popraw"
                    onClick={editStrength}
                  />
                  <TButton
                    className="formStrength__btn"
                    type="cancel"
                    content="anuluj"
                    onClick={cancelEditStrength}
                  />
                </>
              ) : (
                <TButton
                  className="formStrength__btn"
                  disabled={
                    inputs.strength.length === 0 ||
                    inputList.strengths.length === 5
                  }
                  type="add"
                  content="dodaj"
                  onClick={addStrength}
                />
              )}
            </Form.Group>
          </Form>
        </Col>
        <Col xl={3} />
      </Row>
      <Row className="mt-4" />
      <Row>
        <Col xl={3} />
        <Col xl={6}>
          {inputList.strengths.length > 0 && (
            <ListGroup variant="flush">
              {inputList.strengths.map((strength, index) => (
                <StrengthItem strength={strength} key={index} index={index} />
              ))}
            </ListGroup>
          )}
        </Col>
        <Col xl={3} />
      </Row>
    </>
  );
};

export default StrengthForm;

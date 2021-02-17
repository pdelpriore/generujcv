import React, { useEffect, useContext } from "react";
import { HobbyFormContext } from "../../../context/hobbyForm/HobbyFormContext";
import HobbyItem from "../../inputList/hobbyItem/HobbyItem";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import { capitalizeFirst } from "../../../methods/capitalize";
import "./hobbyForm.css";

const HobbyForm: React.FC = () => {
  const {
    inputs,
    inputList,
    isHobbyEditing,
    onChangeHobby,
    addHobby,
    editHobby,
    cancelEditHobby,
    clearForm,
    formIndex,
  } = useContext(HobbyFormContext);

  useEffect(() => {
    return () => {
      if (isHobbyEditing) clearForm();
    };
  }, [isHobbyEditing, formIndex, clearForm]);

  return (
    <>
      <Row>
        <Col xl={3} xs={1} />
        <Col xl={6} xs={10}>
          <Form className="formHobby">
            <Form.Group className="formHobby__group" controlId="formHobby">
              <div className="formHobby__group-wrap">
                <Form.Label className="formHobby__label">
                  {capitalizeFirst("zainteresowania")}
                </Form.Label>
                <Form.Control
                  className="formHobby__control"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeHobby(e)
                  }
                  value={inputs.hobby || ""}
                  name="hobby"
                  type="text"
                  placeholder="zainteresowania"
                />
              </div>
              {isHobbyEditing ? (
                <>
                  <TButton
                    className="formHobby__btn"
                    type="add"
                    content="popraw"
                    onClick={editHobby}
                  />
                  <TButton
                    className="formHobby__btn"
                    type="cancel"
                    content="anuluj"
                    onClick={cancelEditHobby}
                  />
                </>
              ) : (
                <TButton
                  className="formHobby__btn"
                  disabled={
                    inputs.hobby.length === 0 || inputList.hobbies.length === 5
                  }
                  type="add"
                  content="dodaj"
                  onClick={addHobby}
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
          {inputList.hobbies.length > 0 && (
            <ListGroup variant="flush">
              {inputList.hobbies.map((hobby, index) => (
                <HobbyItem hobby={hobby} key={index} index={index} />
              ))}
            </ListGroup>
          )}
        </Col>
        <Col xl={3} xs={1} />
      </Row>
    </>
  );
};

export default HobbyForm;

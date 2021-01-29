import React, { useContext } from "react";
import { LanguageFormContext } from "../../../context/languageForm/LanguageFormContext";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import { languagelevels } from "../../../shared/menuElements";
import { capitalizeFirst } from "../../../methods/capitalize";
import LanguageItem from "../../inputList/languageItem/LanguageItem";
import "./languageForm.css";

const LanguageForm: React.FC = () => {
  const {
    inputs,
    inputList,
    isLanguageEditing,
    onChangeLanguage,
    addLanguage,
    editLanguageState,
  } = useContext(LanguageFormContext);

  return (
    <>
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <Form className="formLanguage">
            <Form.Group
              className="formLanguage__group"
              controlId="formLanguage"
            >
              <div className="formLanguage__group-wrap">
                <Form.Label className="formLanguage__label">
                  {capitalizeFirst("język")}
                </Form.Label>
                <Form.Control
                  className="formLanguage__control"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeLanguage(e)
                  }
                  value={inputs.language.name || ""}
                  name="name"
                  type="text"
                  placeholder="język"
                />
              </div>
              <div className="formLanguage__group-wrap">
                <Form.Label className="formLanguage__label">
                  {capitalizeFirst("poziom")}
                </Form.Label>
                <Form.Control
                  className="formLanguage__control"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeLanguage(e)
                  }
                  value={inputs.language.level || ""}
                  name="level"
                  as="select"
                >
                  <option
                    className="formLanguage__option"
                    disabled={true}
                    value=""
                  >
                    poziom
                  </option>
                  {languagelevels.map((level, index) => (
                    <option className="formLanguage__option" key={index}>
                      {level}
                    </option>
                  ))}
                </Form.Control>
              </div>
              {isLanguageEditing ? (
                <TButton
                  className="formLanguage__btn"
                  type="add"
                  content="popraw"
                  onClick={editLanguageState}
                />
              ) : (
                <TButton
                  className="formLanguage__btn"
                  disabled={
                    inputs.language.name.length === 0 ||
                    inputs.language.level.length === 0 ||
                    inputList.languages.length === 5
                  }
                  type="add"
                  content="dodaj"
                  onClick={addLanguage}
                />
              )}
            </Form.Group>
          </Form>
        </Col>
        <Col xs={1} />
      </Row>
      <Row className="mt-4" />
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          {inputList.languages.length > 0 && (
            <ListGroup variant="flush">
              {inputList.languages.map((language, index) => (
                <LanguageItem
                  name={language.name}
                  level={language.level}
                  key={index}
                  index={index}
                />
              ))}
            </ListGroup>
          )}
        </Col>
        <Col xs={1} />
      </Row>
    </>
  );
};

export default LanguageForm;

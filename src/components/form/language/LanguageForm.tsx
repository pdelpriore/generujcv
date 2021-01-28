import React from "react";
import { FormInputTypes } from "../../../hooks/form/useForm";
import { Col, Row, Form } from "react-bootstrap";
import { languagelevels } from "../../../shared/menuElements";
import { capitalizeFirst } from "../../../methods/capitalize";
import "./languageForm.css";

type TOnchangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface LanguageFormProps {
  inputs: FormInputTypes;
  onChangeLanguage: TOnchangeLanguage;
  addClick: JSX.Element;
}

const LanguageForm: React.FC<LanguageFormProps> = ({
  inputs,
  onChangeLanguage,
  addClick,
}) => {
  return (
    <Row>
      <Col xs={1} />
      <Col xs={10}>
        <Form className="formLanguage">
          <Form.Group className="formLanguage__group" controlId="formLanguage">
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
            {addClick}
          </Form.Group>
        </Form>
      </Col>
      <Col xs={1} />
    </Row>
  );
};

export default LanguageForm;

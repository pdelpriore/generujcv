import React from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";
import { Row, Col } from "react-bootstrap";
import TButton from "../../components/button/TButton";
import "./preview.css";

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface PreviewProps {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  closePreview: TOnclick;
}

const Preview: React.FC<PreviewProps> = ({
  inputs,
  inputList,
  closePreview,
}) => {
  return (
    <div className="previewContainer">
      <Row>
        <Col xs={4} />
        <Col xs={4}>
          <TButton type="cancel" content="zamknij" onClick={closePreview} />
        </Col>
        <Col xs={4} />
      </Row>
    </div>
  );
};

export default Preview;

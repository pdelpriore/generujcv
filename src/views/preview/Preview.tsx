import React, { useEffect } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";
import { Row, Col, Spinner } from "react-bootstrap";
import TButton from "../../components/button/TButton";
import "./preview.css";

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TSetLoader = (value: boolean) => void;

interface PreviewProps {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isPageLoading: boolean;
  setLoader: TSetLoader;
  closePreview: TOnclick;
}

const Preview: React.FC<PreviewProps> = ({
  inputs,
  inputList,
  isPageLoading,
  setLoader,
  closePreview,
}) => {
  useEffect(() => {
    setLoader(false);
    return () => setLoader(true);
  }, [setLoader]);

  return isPageLoading ? (
    <div className="loadingContainer">
      <Spinner animation="border" role="status" />
    </div>
  ) : (
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

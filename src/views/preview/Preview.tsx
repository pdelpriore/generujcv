import React, { useEffect } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import TButton from "../../components/button/TButton";
import "./preview.css";

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TSetLoader = (value: boolean) => void;

interface PreviewProps {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  isPageLoading: boolean;
  setPageLoader: TSetLoader;
  closePreview: TOnclick;
}

const Preview: React.FC<PreviewProps> = ({
  inputs,
  inputList,
  isPageLoading,
  setPageLoader,
  closePreview,
}) => {
  useEffect(() => {
    setPageLoader(false);
    return () => setPageLoader(true);
  }, [setPageLoader]);

  return isPageLoading ? (
    <div className="loadingContainer">
      <Spinner animation="border" role="status" />
    </div>
  ) : (
    <div className="previewContainer">
      <div className="previewSections">
        <div className="firstColumn">
          <div className="firstColumn__item">
            <Image
              className="firstColumn__item-photo"
              src={inputs.photo}
              roundedCircle
            />
          </div>
          <div className="firstColumn__item">
            <span className="firstColumn__item-span">KONTAKT</span>
          </div>
          <div className="firstColumn__item"></div>
          <div className="firstColumn__item"></div>
          <div className="firstColumn__item"></div>
          <div className="firstColumn__item"></div>
        </div>
        <div className="secondColumn"></div>
      </div>
      <div className="previewButtons">
        <Row>
          <Col xs={4} />
          <Col xs={4} className="justify-right">
            <TButton type="cancel" content="zamknij" onClick={closePreview} />
          </Col>
          <Col xs={4} />
        </Row>
      </div>
    </div>
  );
};

export default Preview;

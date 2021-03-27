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
        <section className="user">
          {inputs.photo && (
            <div className="user__photo">
              <Image
                className="user__photo-img"
                src={inputs.photo || ""}
                roundedCircle
              />
              <div className="user__photo-blueCircle"></div>
              <div className="user__photo-grayCircle"></div>
            </div>
          )}
          <div
            className={`${
              inputs.photo ? "user__data" : "user__data user__data--noPhoto"
            }`}
          >
            <span className="user__data-info user__data-info--name">
              {`${inputs.userData.name} `}
            </span>
            <span className="user__data-info user__data-info--name user__data-info--surname">
              {inputs.userData.surname}
            </span>
            <span className="user__data-info"></span>
            <span className="user__data-info"></span>
            <span className="user__data-info"></span>
          </div>
        </section>
        <section className="diploma"></section>
        <section className="competence"></section>
        <section className="experience"></section>
        <section className="hobby"></section>
        <section className="language"></section>
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

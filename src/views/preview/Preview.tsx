import React, { useEffect } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import TButton from "../../components/button/TButton";
import ContactItem from "../../components/preview/contactItem/ContactItem";
import { contactIcons } from "../../shared/menuElements";
import { capitalizeFirst } from "../../methods/capitalize";
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
          {inputs.photo.length > 0 && (
            <div className="firstColumn__item">
              <Image
                className="firstColumn__item-photo"
                src={inputs.photo}
                roundedCircle
              />
            </div>
          )}
          <div
            className={`${
              inputs.photo.length > 0
                ? "firstColumn__item"
                : "firstColumn__item firstColumn__item--noPhoto"
            }`}
          >
            <span className="firstColumn__item-span">KONTAKT</span>
            <>
              {contactIcons.map((icon, index) => {
                const contacts: string[] = [
                  inputs.userData.contact.tel,
                  inputs.userData.contact.email,
                  `${capitalizeFirst(inputs.userData.address.street)} ${
                    inputs.userData.address.streetNumber
                  }${
                    inputs.userData.address.flatNumber > 0
                      ? `/${inputs.userData.address.flatNumber}`
                      : ""
                  }, ${inputs.userData.address.postCode} ${capitalizeFirst(
                    inputs.userData.address.city
                  )}`,
                  inputs.userData.contact.linkedinUrl,
                ];
                return (
                  contacts[index].length > 0 && (
                    <ContactItem
                      key={index}
                      icon={icon}
                      content={contacts[index]}
                    />
                  )
                );
              })}
            </>
          </div>
          <div
            className={`${
              inputs.photo.length > 0
                ? "firstColumn__item"
                : "firstColumn__item firstColumn__item--noPhoto"
            }`}
          ></div>
          <div
            className={`${
              inputs.photo.length > 0
                ? "firstColumn__item"
                : "firstColumn__item firstColumn__item--noPhoto"
            }`}
          ></div>
          <div
            className={`${
              inputs.photo.length > 0
                ? "firstColumn__item"
                : "firstColumn__item firstColumn__item--noPhoto"
            }`}
          ></div>
          <div
            className={`${
              inputs.photo.length > 0
                ? "firstColumn__item"
                : "firstColumn__item firstColumn__item--noPhoto"
            }`}
          ></div>
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

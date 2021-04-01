import React, { useEffect } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import TButton from "../../components/button/TButton";
import ContactItem from "../../components/preview/contactItem/ContactItem";
import GenericItem from "../../components/preview/genericItem/GenericItem";
import LanguageItem from "../../components/preview/languageItem/LanguageItem";
import { contactIcons } from "../../shared/menuElements";
import "./preview.css";

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TSetLoader = (value: boolean) => void;

interface PreviewProps {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  sectionVolume: number;
  isPageLoading: boolean;
  setPageLoader: TSetLoader;
  closePreview: TOnclick;
}

const Preview: React.FC<PreviewProps> = ({
  inputs,
  inputList,
  sectionVolume,
  isPageLoading,
  setPageLoader,
  closePreview,
}) => {
  const firstColumnSection =
    inputs.photo.length === 0
      ? "firstColumn__section firstColumn__section--noPhoto"
      : "firstColumn__section";
  const userPhoto =
    sectionVolume > 0 && sectionVolume <= 3
      ? "firstColumn__section-photo"
      : "firstColumn__section-photo firstColumn__section-photo--volume";

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
      <div className="previewColumns">
        <div className="firstColumn">
          {inputs.photo.length > 0 && (
            <section className={firstColumnSection}>
              <Image className={userPhoto} src={inputs.photo} roundedCircle />
            </section>
          )}
          <section className={firstColumnSection}>
            <>
              <span className="firstColumn__section-label">KONTAKT</span>
              {contactIcons.map((icon, index) => {
                const contacts: string[] = [
                  inputs.userData.contact.tel,
                  inputs.userData.contact.email,
                  `${inputs.userData.address.street} ${
                    inputs.userData.address.streetNumber
                  }${
                    inputs.userData.address.flatNumber > 0
                      ? `/${inputs.userData.address.flatNumber}`
                      : ""
                  }, ${inputs.userData.address.postCode} ${
                    inputs.userData.address.city
                  }`,
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
          </section>
          {inputList.strengths.length > 0 && (
            <section className={firstColumnSection}>
              <span className="firstColumn__section-label">MOCNE STRONY</span>
              <div className="firstColumn__section-list">
                {inputList.strengths.map((strength, index) => (
                  <GenericItem key={index} content={strength} />
                ))}
              </div>
            </section>
          )}
          {inputList.competences.length > 0 && (
            <section className={firstColumnSection}>
              <span className="firstColumn__section-label">KOMPETENCJE</span>
              <div className="firstColumn__section-list firstColumn__section-list--competence">
                {inputList.competences.map((competence, index) => (
                  <GenericItem key={index} content={competence} />
                ))}
              </div>
            </section>
          )}
          {inputList.languages.length > 0 && (
            <section className={firstColumnSection}>
              <span className="firstColumn__section-label">JĘZYKI OBCE</span>
              <div className="firstColumn__section-list">
                {inputList.languages.map((language, index) => (
                  <LanguageItem
                    key={index}
                    level={language.level}
                    name={language.name}
                  />
                ))}
              </div>
            </section>
          )}
          {inputList.hobbies.length > 0 && (
            <section className={firstColumnSection}>
              <span className="firstColumn__section-label">
                ZAINTERESOWANIA
              </span>
              <div className="firstColumn__section-list">
                {inputList.hobbies.map((hobby, index) => (
                  <GenericItem key={index} content={hobby} />
                ))}
              </div>
            </section>
          )}
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

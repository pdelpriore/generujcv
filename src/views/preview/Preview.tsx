import React, { useEffect } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import TButton from "../../components/button/TButton";
import ContactItem from "../../components/preview/contactItem/ContactItem";
import GenericItem from "../../components/preview/genericItem/GenericItem";
import LanguageItem from "../../components/preview/languageItem/LanguageItem";
import DiplomaItem from "../../components/preview/diplomaItem/DiplomaItem";
import { contactIcons } from "../../shared/menuElements";
import { getContacts } from "../../methods/getContacts";
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
  const section =
    inputs.photo.length === 0 ? "section section--nophoto" : "section";
  const userPhoto =
    sectionVolume > 0 && sectionVolume <= 3
      ? "section__photo"
      : "section__photo section__photo--volume";

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
            <section className="section section--photo">
              <Image className={userPhoto} src={inputs.photo} roundedCircle />
            </section>
          )}
          <section className={section}>
            <>
              <span className="section__label section__label--firstcolumn">
                KONTAKT
              </span>
              {contactIcons.map((icon, index) => {
                const contacts: string[] = getContacts(inputs);
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
            <section className={section}>
              <span className="section__label section__label--firstcolumn">
                MOCNE STRONY
              </span>
              <div className="section__list-firstcolumn">
                {inputList.strengths.map((strength, index) => (
                  <GenericItem key={index} content={strength} />
                ))}
              </div>
            </section>
          )}
          {inputList.competences.length > 0 && (
            <section className={section}>
              <span className="section__label section__label--firstcolumn">
                KOMPETENCJE
              </span>
              <div className="section__list-firstcolumn section__list-firstcolumn--competence">
                {inputList.competences.map((competence, index) => (
                  <GenericItem key={index} content={competence} />
                ))}
              </div>
            </section>
          )}
          {inputList.languages.length > 0 && (
            <section className={section}>
              <span className="section__label section__label--firstcolumn">
                JĘZYKI OBCE
              </span>
              <div className="section__list-firstcolumn">
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
            <section className={section}>
              <span className="section__label section__label--firstcolumn">
                ZAINTERESOWANIA
              </span>
              <div className="section__list-firstcolumn">
                {inputList.hobbies.map((hobby, index) => (
                  <GenericItem key={index} content={hobby} />
                ))}
              </div>
            </section>
          )}
        </div>
        <div className="secondColumn">
          <section className={section}>
            <span className="section__label section__label--secondcolumn section__label--name">
              {inputs.userData.name.toUpperCase()}
            </span>
            <span className="section__label section__label--secondcolumn section__label--name">
              {inputs.userData.surname.toUpperCase()}
            </span>
            <span className="section__label section__label--secondcolumn section__label--name section__label--jobposition">
              {inputs.userData.jobPosition.toUpperCase()}
            </span>
          </section>
          {inputList.diplomas.length > 0 && (
            <section className={section}>
              <span className="section__label section__label--secondcolumn">
                EDUKACJA
              </span>
              <div className="section__list-secondcolumn">
                {inputList.diplomas.map((diploma, index) => (
                  <DiplomaItem
                    key={index}
                    schoolStart={diploma.startPeriod}
                    schoolEnd={diploma.endPeriod}
                    schoolName={diploma.schoolName}
                    faculty={diploma.faculty}
                    degree={diploma.degree}
                    description={diploma.description}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
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

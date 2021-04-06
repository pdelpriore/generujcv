import React, { useEffect, useRef } from "react";
import { FormInputTypes, FormInputListType } from "../../hooks/form/formTypes";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TButton from "../../components/button/TButton";
import ContactItem from "../../components/preview/contactItem/ContactItem";
import GenericItem from "../../components/preview/genericItem/GenericItem";
import LanguageItem from "../../components/preview/languageItem/LanguageItem";
import DiplomaItem from "../../components/preview/diplomaItem/DiplomaItem";
import ExperienceItem from "../../components/preview/experienceItem/ExperienceItem";
import ProjectItem from "../../components/preview/projectItem/ProjectItem";
import { contactIcons } from "../../shared/menuElements";
import { getContacts } from "../../methods/getContacts";
import { getRodo } from "../../methods/getRodo";
import "./preview.css";

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type TSetLoader = (value: boolean) => void;
type TGenerate = (cvDocument: HTMLDivElement) => void;

interface PreviewProps {
  inputs: FormInputTypes;
  inputList: FormInputListType;
  sectionVolume: number;
  isPageLoading: boolean;
  setPageLoader: TSetLoader;
  closePreview: TOnclick;
  generatecv: TGenerate;
}

const Preview: React.FC<PreviewProps> = ({
  inputs,
  inputList,
  sectionVolume,
  isPageLoading,
  setPageLoader,
  closePreview,
  generatecv,
}) => {
  const section =
    inputs.photo.length === 0 ? "section section--nophoto" : "section";
  const userPhoto =
    sectionVolume > 0 && sectionVolume <= 3
      ? "section__photo"
      : "section__photo section__photo--volume";

  const cvDocument = useRef<HTMLDivElement>(null);

  const { loading, error } = useSelector((state: RootState) => state.pdfState);

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
      <div ref={cvDocument} className="previewColumns">
        <div className="firstColumn">
          {inputs.photo.length > 0 && (
            <section className="section section--photo">
              <Image className={userPhoto} src={inputs.photo} roundedCircle />
            </section>
          )}
          <section className={section}>
            <>
              <span className="section__label section__label--firstcolumn">
                {`kontakt`.toUpperCase()}
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
                {`mocne strony`.toUpperCase()}
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
                {`kompetencje`.toUpperCase()}
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
                {`języki obce`.toUpperCase()}
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
                {`zainteresowania`.toUpperCase()}
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
          <section className="section">
            <span className="section__label section__label--secondcolumn section__label--name">
              {inputs.userData.name.toUpperCase()}{" "}
              {inputs.userData.surname.toUpperCase()}
            </span>
            <span className="section__label section__label--secondcolumn section__label--name section__label--jobposition">
              {inputs.userData.jobPosition.toUpperCase()}
            </span>
          </section>
          {inputList.experiences.length > 0 && (
            <section className="section">
              <span className="section__label section__label--secondcolumn">
                {`doświadczenie zawodowe`.toUpperCase()}
              </span>
              <div className="section__list-secondcolumn">
                {inputList.experiences.map((experience, index) => (
                  <ExperienceItem
                    key={index}
                    companyStart={experience.startPeriod}
                    companyEnd={experience.endPeriod}
                    jobPosition={experience.jobPosition}
                    company={experience.company}
                    city={experience.city}
                    description={experience.description}
                  />
                ))}
              </div>
            </section>
          )}
          {inputList.diplomas.length > 0 && (
            <section className="section">
              <span className="section__label section__label--secondcolumn">
                {`edukacja`.toUpperCase()}
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
          {inputList.projects.length > 0 && (
            <section className="section">
              <span className="section__label section__label--secondcolumn">
                {`projekty`.toUpperCase()}
              </span>
              <div className="section__list-secondcolumn">
                {inputs.githubUrl.length > 0 && (
                  <div className="github">
                    <div className="github__icon">
                      <FontAwesomeIcon
                        className="github__icon-ico"
                        icon={faGithub}
                      />
                    </div>
                    <span className="github__url">{inputs.githubUrl}</span>
                  </div>
                )}
                {inputList.projects.map((project, index) => (
                  <ProjectItem
                    key={index}
                    name={project.name}
                    url={project.url}
                    description={project.description}
                  />
                ))}
              </div>
            </section>
          )}
          <section className="section section--rodo">
            <span className="section__rodo">{getRodo()}</span>
          </section>
        </div>
      </div>
      <div className="previewButtons">
        <Row>
          <Col xs={4} />
          <Col xs={4} className="justify-right">
            <TButton type="cancel" content="zamknij" onClick={closePreview} />
            <TButton
              loading={loading}
              type="add"
              content="generuj cv"
              onClick={() => generatecv(cvDocument.current as HTMLDivElement)}
            />
          </Col>
          <Col xs={4} />
        </Row>
      </div>
    </div>
  );
};

export default Preview;

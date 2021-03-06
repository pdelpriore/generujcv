import React, { useEffect, useContext } from "react";
import { Row, Col, Form, ListGroup } from "react-bootstrap";
import { ProjectFormContext } from "../../../context/projectForm/ProjectFormContext";
import TButton from "../../button/TButton";
import ProjectItem from "../../inputList/projectItem/ProjectItem";
import { capitalize } from "../../../methods/capitalize";
import "./projectForm.css";

const ProjectForm: React.FC = () => {
  const {
    inputs,
    inputList,
    isProjectEditing,
    onChangeGithub,
    onChangeProject,
    addProject,
    editProject,
    cancelEditProject,
    clearForm,
    formIndex,
  } = useContext(ProjectFormContext);

  useEffect(() => {
    return () => {
      if (isProjectEditing) clearForm();
    };
  }, [isProjectEditing, formIndex, clearForm]);

  return (
    <>
      <Form className="formProject">
        <Row>
          <Col xl={3} xs={1} />
          <Col xl={6} xs={10}>
            <Form.Group controlId="formProjectGithubUrl">
              <Form.Label className="formProject__label">
                {capitalize("repozytorium github")}
              </Form.Label>
              <Form.Control
                className="formProject__control"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeGithub(e)
                }
                value={inputs.githubUrl || ""}
                name="githubUrl"
                type="text"
                placeholder="https://github.com/jankowalski"
              />
            </Form.Group>
          </Col>
          <Col xl={3} xs={1} />
        </Row>
        <div className="formProject__group-wrapper">
          <Form.Group controlId="formProjectName">
            <Form.Label className="formProject__label">
              {capitalize("nazwa projektu")}
            </Form.Label>
            <Form.Control
              className="formProject__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeProject(e)
              }
              value={inputs.project.name || ""}
              name="name"
              type="text"
              placeholder="nazwa projektu"
            />
          </Form.Group>
          <Form.Group controlId="formProjectUrl">
            <Form.Label className="formProject__label">
              {capitalize("link do projektu")}
            </Form.Label>
            <Form.Control
              className="formProject__control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeProject(e)
              }
              value={inputs.project.url || ""}
              name="url"
              type="text"
              placeholder="https://awesomeapp.herokuapp.com"
            />
          </Form.Group>
          <Form.Group controlId="formProjectDescription">
            <Form.Label className="formProject__label">
              {capitalize("opis projektu")}
            </Form.Label>
            <Form.Control
              className="formProject__control"
              as="textarea"
              rows={4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeProject(e)
              }
              value={inputs.project.description || ""}
              name="description"
              type="text"
              placeholder="opis projektu"
            />
          </Form.Group>
          {isProjectEditing ? (
            <div className="formProject__btn-wrapper">
              <TButton
                className="formProject__btn"
                type="add"
                content="popraw"
                onClick={editProject}
              />
              <TButton
                className="formProject__btn"
                type="cancel"
                content="anuluj"
                onClick={cancelEditProject}
              />
            </div>
          ) : (
            <div className="formProject__btn-wrapper">
              <TButton
                className="formProject__btn"
                disabled={
                  inputs.project.name.length === 0 ||
                  inputs.project.url.length === 0 ||
                  inputList.projects.length === 3
                }
                type="add"
                content="dodaj"
                onClick={addProject}
              />
            </div>
          )}
        </div>
      </Form>
      <div className="formProject__inputList">
        {inputList.projects.length > 0 && (
          <ListGroup variant="flush">
            {inputList.projects.map((project, index) => (
              <ProjectItem
                key={index}
                name={project.name}
                url={project.url}
                description={project.description}
                index={index}
              />
            ))}
          </ListGroup>
        )}
      </div>
    </>
  );
};

export default ProjectForm;

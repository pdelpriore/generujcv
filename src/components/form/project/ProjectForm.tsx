import React, { useEffect, useContext } from "react";
import { ProjectFormContext } from "../../../context/projectForm/ProjectFormContext";
import { Row, Col, Form } from "react-bootstrap";
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
  } = useContext(ProjectFormContext);

  return (
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
            name="url"
            type="text"
            placeholder="link do projektu"
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
            name="description"
            type="text"
            placeholder="opis projektu"
          />
        </Form.Group>
      </div>
    </Form>
  );
};

export default ProjectForm;

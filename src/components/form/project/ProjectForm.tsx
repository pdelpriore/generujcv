import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";
import "./projectForm.css";

const ProjectForm: React.FC = () => {
  return (
    <Form className="formProject">
      <Row>
        <Col xl={3} xs={1} />
        <Col xl={6} xs={10}>
          <Form.Group controlId="formProjectGithubUrl">
            <Form.Label>{capitalize("repozytorium github")}</Form.Label>
            <Form.Control
              name="githubUrl"
              type="text"
              placeholder="https://github.com/jankowalski"
            />
          </Form.Group>
        </Col>
        <Col xl={3} xs={1} />
      </Row>
      <div className="formProject__wrapper">
        <Form.Group controlId="formProjectName">
          <Form.Label>{capitalize("nazwa projektu")}</Form.Label>
          <Form.Control name="name" type="text" placeholder="nazwa projektu" />
        </Form.Group>
        <Form.Group controlId="formProjectUrl">
          <Form.Label>{capitalize("link do projektu")}</Form.Label>
          <Form.Control name="url" type="text" placeholder="link do projektu" />
        </Form.Group>
        <Form.Group controlId="formProjectDescription">
          <Form.Label>{capitalize("opis projektu")}</Form.Label>
          <Form.Control
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

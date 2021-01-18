import React from "react";
import { Row, Col } from "react-bootstrap";
import "./app.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Row className="mt-4" />
      <Row>
        <Col xs={1} />
        <Col xs={11}>
          <div className="logo">
            <span className="logo-content">generujcv</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;

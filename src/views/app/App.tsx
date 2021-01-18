import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./app.css";

const App: React.FC = () => {
  const [viewport, setViewport] = useState<number>(0);

  useEffect(() => {
    setViewport(window.innerWidth);
  }, []);

  return (
    <div className="container">
      <Row className="mt-4" />
      <Row>
        <Col xl={1} xs={2} />
        <Col xl={11} xs={10}>
          <div className="logo">
            <span className="logo-content">generujcv</span>
          </div>
        </Col>
      </Row>
      {viewport > 319 && viewport <= 374 ? (
        <Row className="mt-3" />
      ) : (
        <Row className="mt-5" />
      )}
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <div className="main">
            <div className="main__menu"></div>
            <div className="main__content"></div>
          </div>
        </Col>
        <Col xs={1} />
      </Row>
    </div>
  );
};

export default App;

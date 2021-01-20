import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MenuItem from "../../components/menu/MenuItem";
import { menuElements } from "../../shared/menuElements";
import { capitalize } from "../../methods/capitalize";
import getForm from "../../shared/getForm";
import "./app.css";

const App: React.FC = () => {
  const [viewport, setViewport] = useState<number>(0);
  const [menuItemIndex, setMenuItemIndex] = useState<number>(0);

  let Form = getForm(menuItemIndex);

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setMenuItemIndex(index);
  };

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
      <Row
        className={`${viewport > 319 && viewport <= 374 ? "mt-3" : "mt-5"}`}
      />
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <div className="main">
            <div className="main__menu">
              {menuElements.map((element, index) => (
                <MenuItem
                  active={index === menuItemIndex}
                  icon={element.icon}
                  content={capitalize(element.content)}
                  index={index}
                  onClick={handleMenuItemClick}
                  key={index}
                />
              ))}
            </div>
            <div className="main__content">{Form}</div>
          </div>
        </Col>
        <Col xs={1} />
      </Row>
    </div>
  );
};

export default App;

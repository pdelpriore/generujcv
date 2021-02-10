import React, { useState, useEffect } from "react";
import ScrollArea from "react-scrollbar";
import { setViewport } from "../../redux/viewport/thunk/viewportThunk";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/Store";
import { Row, Col } from "react-bootstrap";
import MenuItem from "../../components/menu/MenuItem";
import { menuElements } from "../../shared/menuElements";
import { capitalize } from "../../methods/capitalize";
import getForm from "../../methods/getForm";
import useVisibility from "../../hooks/visibility/useVisibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./app.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { viewport } = useSelector((state: RootState) => state.viewportState);
  const [menuItemIndex, setMenuItemIndex] = useState<number>(0);
  const [isVisible, setVisibility] = useVisibility({
    menuComponent: false,
    menuIcon: false,
  });

  let Form = getForm(menuItemIndex);

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setMenuItemIndex(index);
    setTimeout(
      () => setVisibility("menuComponent", !isVisible.menuComponent),
      100
    );
  };

  const handleMenuIconClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    setVisibility("menuComponent", !isVisible.menuComponent);
  };

  useEffect(() => {
    dispatch(setViewport(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    const updateWindowSize = () => {
      dispatch(setViewport(window.innerWidth));
    };
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, [dispatch]);

  useEffect(() => {
    viewport < 1025
      ? setVisibility("menuIcon", true)
      : setVisibility("menuIcon", false);
  }, [viewport, setVisibility]);

  return (
    <div className="container">
      <Row className="mt-4" />
      <Row>
        <Col xl={1} />
        <Col xl={11} xs={12}>
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
            {isVisible.menuIcon && (
              <FontAwesomeIcon
                onClick={handleMenuIconClick}
                className="main__nav"
                icon={faBars}
              />
            )}
            <div
              className={`main__menu ${
                isVisible.menuComponent
                  ? "main__menu--visible"
                  : "main__menu--hidden"
              }`}
            >
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
            <ScrollArea
              className="main__content"
              smoothScrolling={true}
              horizontal={false}
            >
              {Form}
            </ScrollArea>
          </div>
        </Col>
        <Col xs={1} />
      </Row>
    </div>
  );
};

export default App;

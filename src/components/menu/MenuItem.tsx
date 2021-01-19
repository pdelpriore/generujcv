import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

interface MenuItemProps {
  icon: IconDefinition;
  content: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, content }) => {
  return (
    <div className="menu">
      <FontAwesomeIcon className="menu__icon" icon={icon} />
      <span className="menu__content">{content}</span>
    </div>
  );
};

export default MenuItem;

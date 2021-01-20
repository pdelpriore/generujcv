import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

type TOnclick = (
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  index: number
) => void;

interface MenuItemProps {
  active: boolean;
  icon: IconDefinition;
  content: string;
  index: number;
  onClick: TOnclick;
}

const MenuItem: React.FC<MenuItemProps> = ({
  active,
  icon,
  content,
  index,
  onClick,
}) => {
  return (
    <div className="menu">
      <div className="menu__icon">
        <FontAwesomeIcon
          className={`menu__icon-ico ${active && "--active"}`}
          icon={icon}
        />
      </div>
      <span
        onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
          onClick(e, index)
        }
        className={`menu__content ${active && "--active"}`}
      >
        {content}
      </span>
    </div>
  );
};

export default MenuItem;

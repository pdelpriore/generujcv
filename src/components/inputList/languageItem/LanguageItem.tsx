import React from "react";
import { ListGroup } from "react-bootstrap";
import "./languageItem.css";

interface LanguageItemProps {
  name: string;
  level: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ name, level }) => {
  return (
    <div className="languageItem">
      <ListGroup.Item className="languageItem-item">
        <span className="languageItem-item__content">{name}</span>
        <span className="languageItem-item__content">{level}</span>
      </ListGroup.Item>
    </div>
  );
};

export default LanguageItem;

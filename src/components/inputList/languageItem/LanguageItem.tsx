import React from "react";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
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
        <TButton
          className="languageItem-item__btn"
          type="edit"
          content="edytuj"
          onClick={() => console.log("edit")}
        />
        <TButton
          className="languageItem-item__btn"
          type="delete"
          content="usuń"
          onClick={() => console.log("delete")}
        />
      </ListGroup.Item>
    </div>
  );
};

export default LanguageItem;

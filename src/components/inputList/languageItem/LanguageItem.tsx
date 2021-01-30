import React, { useContext } from "react";
import { LanguageFormContext } from "../../../context/languageForm/LanguageFormContext";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import "./languageItem.css";

interface LanguageItemProps {
  name: string;
  level: string;
  index: number;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ name, level, index }) => {
  const { sendLanguageToEdit, deleteLanguage } = useContext(
    LanguageFormContext
  );

  return (
    <div className="languageItem">
      <ListGroup.Item className="languageItem-item">
        <span className="languageItem-item__content">{name}</span>
        <span className="languageItem-item__content">{level}</span>
        <TButton
          className="languageItem-item__btn"
          type="edit"
          content="edytuj"
          onClick={sendLanguageToEdit}
          index={index}
        />
        <TButton
          className="languageItem-item__btn"
          type="delete"
          content="usuń"
          onClick={deleteLanguage}
          index={index}
        />
      </ListGroup.Item>
    </div>
  );
};

export default LanguageItem;

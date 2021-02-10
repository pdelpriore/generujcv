import React, { useContext } from "react";
import { DiplomaFormContext } from "../../../context/diplomaForm/DiplomaFormContext";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import "./diplomaItem.css";

interface DiplomaItemProps {
  index: number;
}

const DiplomaItem: React.FC<DiplomaItemProps> = ({ index }) => {
  const { sendDiplomaToEdit, deleteDiploma } = useContext(DiplomaFormContext);
  return (
    <div className="diplomaItem">
      <ListGroup.Item className="diplomaItem-item">
        <div className="diplomaItem-item__wrapper">
          <span className="diplomaItem-item__content">ok</span>
          <span className="diplomaItem-item__content">ok2</span>
        </div>
        <div className="diplomaItem-item__wrapper">
          <TButton
            className="diplomaItem-item__btn"
            type="edit"
            content="edytuj"
            onClick={sendDiplomaToEdit}
            index={index}
          />
          <TButton
            className="diplomaItem-item__btn"
            type="delete"
            content="usuń"
            onClick={deleteDiploma}
            index={index}
          />
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default DiplomaItem;

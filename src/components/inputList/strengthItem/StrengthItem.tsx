import React, { useContext } from "react";
import { StrengthFormContext } from "../../../context/strengthForm/StrengthFormContext";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import "./strengthItem.css";

interface StrengthItemProps {
  strength: string;
  index: number;
}

const StrengthItem: React.FC<StrengthItemProps> = ({ strength, index }) => {
  const { sendStrengthToEdit, deleteStrength } = useContext(
    StrengthFormContext
  );

  return (
    <div className="strengthItem">
      <ListGroup.Item className="strengthItem-item">
        <span className="strengthItem-item__content">{strength}</span>
        <TButton
          className="strengthItem-item__btn"
          type="edit"
          content="edytuj"
          onClick={sendStrengthToEdit}
          index={index}
        />
        <TButton
          className="strengthItem-item__btn"
          type="delete"
          content="usuń"
          onClick={deleteStrength}
          index={index}
        />
      </ListGroup.Item>
    </div>
  );
};

export default StrengthItem;

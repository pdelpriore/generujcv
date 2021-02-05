import React, { useContext } from "react";
import { HobbyFormContext } from "../../../context/hobbyForm/HobbyFormContext";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import "./hobbyItem.css";

interface StrengthItemProps {
  hobby: string;
  index: number;
}

const HobbyItem: React.FC<StrengthItemProps> = ({ hobby, index }) => {
  const { sendHobbyToEdit, deleteHobby } = useContext(HobbyFormContext);

  return (
    <div className="hobbyItem">
      <ListGroup.Item className="hobbyItem-item">
        <span className="hobbyItem-item__content">{hobby}</span>
        <TButton
          className="hobbyItem-item__btn"
          type="edit"
          content="edytuj"
          onClick={sendHobbyToEdit}
          index={index}
        />
        <TButton
          className="hobbyItem-item__btn"
          type="delete"
          content="usuń"
          onClick={deleteHobby}
          index={index}
        />
      </ListGroup.Item>
    </div>
  );
};

export default HobbyItem;

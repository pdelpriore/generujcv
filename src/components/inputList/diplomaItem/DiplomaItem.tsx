import React, { useContext } from "react";
import { DiplomaFormContext } from "../../../context/diplomaForm/DiplomaFormContext";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import "./diplomaItem.css";

type period = {
  month: string;
  year: number;
};

interface DiplomaItemProps {
  schoolStart: period;
  schoolEnd: period;
  schoolName: string;
  faculty: string;
  degree: string;
  description: string;
  index: number;
}

const DiplomaItem: React.FC<DiplomaItemProps> = ({
  schoolStart,
  schoolEnd,
  schoolName,
  faculty,
  degree,
  description,
  index,
}) => {
  const { sendDiplomaToEdit, deleteDiploma } = useContext(DiplomaFormContext);
  return (
    <div className="diplomaItem">
      <ListGroup.Item className="diplomaItem-item">
        <div className="diplomaItem-item__wrapper">
          <span className="diplomaItem-item__content">{`${
            schoolStart.month
          } / ${schoolStart.year} - ${
            schoolEnd.month.length > 0 && schoolEnd.year > 0
              ? `${schoolEnd.month} / ${schoolEnd.year}`
              : "nadal studiuję"
          }`}</span>
          <span className="diplomaItem-item__content">{schoolName}</span>
          <span className="diplomaItem-item__content">{faculty}</span>
          <span className="diplomaItem-item__content">{degree}</span>
          <span className="diplomaItem-item__content">
            {description.length < 10
              ? description
              : description.slice(0, 10).concat("...")}
          </span>
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

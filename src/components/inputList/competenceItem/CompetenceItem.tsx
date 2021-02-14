import React, { useContext } from "react";
import { CompetenceFormContext } from "../../../context/competenceForm/CompetenceFormContext";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import "./competenceItem.css";

interface CompetenceItemProps {
  competence: string;
  index: number;
}

const CompetenceItem: React.FC<CompetenceItemProps> = ({
  competence,
  index,
}) => {
  const { sendCompetenceToEdit, deleteCompetence } = useContext(
    CompetenceFormContext
  );

  return (
    <div className="competenceItem">
      <ListGroup.Item className="competenceItem-item">
        <span className="competenceItem-item__content">{competence}</span>
        <TButton
          className="competenceItem-item__btn"
          type="edit"
          content="edytuj"
          onClick={sendCompetenceToEdit}
          index={index}
        />
        <TButton
          className="competenceItem-item__btn"
          type="delete"
          content="usuń"
          onClick={deleteCompetence}
          index={index}
        />
      </ListGroup.Item>
    </div>
  );
};

export default CompetenceItem;

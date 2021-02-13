import React, { useContext } from "react";
import { ExperienceFormContext } from "../../../context/experienceForm/ExperienceFormContext";
import { ListGroup } from "react-bootstrap";
import { period } from "../../../hooks/form/formTypes";
import TButton from "../../button/TButton";
import "./experienceItem.css";

interface ExperienceItemProps {
  companyStart: period;
  companyEnd: period;
  workplace: string;
  company: string;
  city: string;
  description: string;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  companyStart,
  companyEnd,
  workplace,
  company,
  city,
  description,
  index,
}) => {
  const { sendExperienceToEdit, deleteExperience } = useContext(
    ExperienceFormContext
  );
  return (
    <div className="experienceItem">
      <ListGroup.Item className="experienceItem-item">
        <div className="experienceItem-item__wrapper">
          <span className="experienceItem-item__content">{`${
            companyStart.month
          }/${companyStart.year} - ${
            companyEnd.month.length > 0 && companyEnd.year > 0
              ? `${companyEnd.month}/${companyEnd.year}`
              : "nadal pracuję"
          }`}</span>
          <span className="experienceItem-item__content">{workplace}</span>
          <span className="experienceItem-item__content">{company}</span>
          <span className="experienceItem-item__content">{city}</span>
          <span className="experienceItem-item__content">
            {description.length < 10
              ? description
              : description.slice(0, 10).concat("...")}
          </span>
        </div>
        <div className="experienceItem-item__wrapper">
          <TButton
            className="experienceItem-item__btn"
            type="edit"
            content="edytuj"
            onClick={sendExperienceToEdit}
            index={index}
          />
          <TButton
            className="experienceItem-item__btn"
            type="delete"
            content="usuń"
            onClick={deleteExperience}
            index={index}
          />
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ExperienceItem;

import React, { useContext } from "react";
import { ProjectFormContext } from "../../../context/projectForm/ProjectFormContext";
import { ListGroup } from "react-bootstrap";
import TButton from "../../button/TButton";
import "./projectItem.css";

interface ProjectItemProps {
  name: string;
  url: string;
  description: string;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  url,
  description,
  index,
}) => {
  const { sendProjectToEdit, deleteProject } = useContext(ProjectFormContext);
  return (
    <div className="projectItem">
      <ListGroup.Item className="projectItem-item">
        <div className="projectItem-item__wrapper">
          <span className="projectItem-item__content">{name}</span>
          <span className="projectItem-item__content">{url}</span>
          <span className="projectItem-item__content">
            {description.length < 10
              ? description
              : description.slice(0, 10).concat("...")}
          </span>
        </div>
        <div className="projectItem-item__wrapper">
          <TButton
            className="projectItem-item__btn"
            type="edit"
            content="edytuj"
            onClick={sendProjectToEdit}
            index={index}
          />
          <TButton
            className="projectItem-item__btn"
            type="delete"
            content="usuń"
            onClick={deleteProject}
            index={index}
          />
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ProjectItem;

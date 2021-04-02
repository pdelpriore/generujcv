import React from "react";
import "./projectItem.css";

interface ProjectItemProps {
  name: string;
  url: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  url,
  description,
}) => {
  return (
    <div className="project">
      <span className="project__content project__content--name">{name}</span>
      <span className="project__content">{url}</span>
      {description.length > 0 && (
        <span className="project__content project__content--description">
          {description}
        </span>
      )}
    </div>
  );
};

export default ProjectItem;

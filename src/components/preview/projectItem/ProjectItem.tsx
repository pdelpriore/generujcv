import React, { useEffect, useRef } from "react";
import { boldPointedDigits } from "../../../methods/boldPointedDigits";
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
  const descriptionSpan = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (descriptionSpan.current)
      descriptionSpan.current.innerHTML = boldPointedDigits(
        descriptionSpan.current.innerText
      );
  }, []);

  return (
    <div className="project">
      <span className="project__content project__content--name">{name}</span>
      <span className="project__content">{url}</span>
      {description.length > 0 && (
        <span
          ref={descriptionSpan}
          className="project__content project__content--description"
        >
          {description}
        </span>
      )}
    </div>
  );
};

export default ProjectItem;

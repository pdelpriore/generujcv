import React, { useRef, useEffect } from "react";
import { period } from "../../../hooks/form/formTypes";
import { boldPointedDigits } from "../../../methods/boldPointedDigits";
import "./diplomaItem.css";

interface DiplomaItemProps {
  schoolStart: period;
  schoolEnd: period;
  schoolName: string;
  faculty: string;
  degree: string;
  description: string;
}

const DiplomaItem: React.FC<DiplomaItemProps> = ({
  schoolStart,
  schoolEnd,
  schoolName,
  faculty,
  degree,
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
    <div className="diploma">
      <span className="diploma__content diploma__content--degree">
        {degree}
      </span>
      <span className="diploma__content">
        {schoolName}, {faculty}
      </span>
      <span className="diploma__content">{`${schoolStart.month}/${
        schoolStart.year
      } - ${
        schoolEnd.month.length > 0 && schoolEnd.year > 0
          ? `${schoolEnd.month}/${schoolEnd.year}`
          : "nadal studiuję"
      }`}</span>
      {description.length > 0 && (
        <span
          ref={descriptionSpan}
          className="diploma__content diploma__content--description"
        >
          {description}
        </span>
      )}
    </div>
  );
};

export default DiplomaItem;

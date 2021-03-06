import React, { useRef, useEffect } from "react";
import { period } from "../../../hooks/form/formTypes";
import { boldPointedDigits } from "../../../methods/boldPointedDigits";
import "./experienceItem.css";

interface ExperienceItemProps {
  companyStart: period;
  companyEnd: period;
  jobPosition: string;
  company: string;
  city: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  companyStart,
  companyEnd,
  jobPosition,
  company,
  city,
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
    <div className="experience">
      <span className="experience__content experience__content--jobposition">
        {jobPosition}
      </span>
      <span className="experience__content">
        {company}, {city}
      </span>
      <span className="experience__content">{`${companyStart.month}/${
        companyStart.year
      } - ${
        companyEnd.month.length > 0 && companyEnd.year > 0
          ? `${companyEnd.month}/${companyEnd.year}`
          : "nadal pracuję"
      }`}</span>
      {description.length > 0 && (
        <span
          ref={descriptionSpan}
          className="experience__content experience__content--description"
        >
          {description}
        </span>
      )}
    </div>
  );
};

export default ExperienceItem;

import React, { useEffect, useState, useRef } from "react";
import { languageLevelValue } from "../../../shared/menuElements";
import { setProgress } from "../../../methods/setProgress";
import "./languageItem.css";

interface LanguageItemProps {
  level: string;
  content: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ level, content }) => {
  const progressCircle = useRef<SVGCircleElement>(null);

  const [progressRadius, setProgressRadius] = useState<number>(0);

  useEffect(() => {
    if (progressCircle.current)
      setProgressRadius(
        Number.parseInt(
          getComputedStyle(
            progressCircle.current as SVGCircleElement
          ).getPropertyValue("r")
        )
      );
  }, []);

  useEffect(() => {
    const circumference = 2 * Math.PI * progressRadius;
    if (progressCircle.current)
      progressCircle.current.style.strokeDasharray = `${setProgress(
        languageLevelValue[level],
        Object.keys(languageLevelValue).length,
        circumference
      )}`;
  }, [progressRadius, level]);

  return (
    <svg width="70" height="70" className="language">
      <circle className="language__track" cx="35" cy="35" r="20"></circle>
      <circle
        ref={progressCircle}
        className="language__progress"
        cx="35"
        cy="35"
        r="20"
      ></circle>
    </svg>
  );
};

export default LanguageItem;

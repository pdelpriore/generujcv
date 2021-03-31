import React, { useEffect, useState, useRef } from "react";
import { Image } from "react-bootstrap";
import { languageLevelValue, countryCode } from "../../../shared/menuElements";
import { setProgress } from "../../../methods/setProgress";
import "./languageItem.css";

interface LanguageItemProps {
  level: string;
  name: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ level, name }) => {
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
    if (progressCircle.current) {
      progressCircle.current.style.strokeDasharray = `${circumference}`;
      progressCircle.current.style.strokeDashoffset = `${setProgress(
        languageLevelValue[level],
        Object.keys(languageLevelValue).length,
        circumference
      )}`;
    }
  }, [progressRadius, level]);

  return (
    <div className="language">
      <svg width="70" height="70" className="language__shape">
        <circle
          className="language__shape-track"
          cx="35"
          cy="35"
          r="20"
        ></circle>
        <circle
          ref={progressCircle}
          className="language__shape-progress"
          cx="35"
          cy="35"
          r="20"
        ></circle>
      </svg>
      <Image
        className="language__flag"
        src={`https://www.countryflags.io/${countryCode[name]}/flat/64.png`}
      />
    </div>
  );
};

export default LanguageItem;

import React from "react";
import "./genericItem.css";

interface GenericItemProps {
  content: string;
}

const GenericItem: React.FC<GenericItemProps> = ({ content }) => {
  return (
    <div className="generic">
      <div className="generic__icon">
        <div className="generic__icon-ico"></div>
      </div>
      <span className="generic__content">{content}</span>
    </div>
  );
};

export default GenericItem;

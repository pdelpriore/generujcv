import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./contactItem.css";

interface ContactItemProps {
  icon: IconDefinition;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, content }) => {
  return (
    <div className="contact">
      <div className="contact__icon">
        <FontAwesomeIcon className="contact__icon-ico" icon={icon} />
      </div>
      <span className="contact__content">{content}</span>
    </div>
  );
};

export default ContactItem;

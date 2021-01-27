import React from "react";
import { Button } from "react-bootstrap";
import { capitalizeFirst } from "../../methods/capitalize";
import "./tButton.css";

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface TButtonProps {
  disabled?: boolean;
  type: string;
  content: string;
  onClick: TOnclick;
}

type buttonType = {
  [key: string]: string;
};

const buttonTypes: buttonType = {
  add: "primary",
  cancel: "info",
};

const TButton: React.FC<TButtonProps> = ({
  disabled,
  type,
  content,
  onClick,
}) => {
  return (
    <Button
      className="button"
      disabled={disabled}
      variant={buttonTypes[type]}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClick(e)
      }
    >
      {capitalizeFirst(content)}
    </Button>
  );
};

export default TButton;

import React from "react";
import { Button } from "react-bootstrap";
import { capitalizeFirst } from "../../methods/capitalize";
import "./tButton.css";

type TOnclick = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;

interface TButtonProps {
  className?: string;
  disabled?: boolean;
  type: string;
  content: string;
  onClick: TOnclick;
  index?: number;
}

type buttonType = {
  [key: string]: string;
};

const buttonTypes: buttonType = {
  add: "info",
  preview: "dark",
  cancel: "light",
  edit: "success",
  delete: "danger",
};

const TButton: React.FC<TButtonProps> = ({
  className,
  disabled,
  type,
  content,
  onClick,
  index,
}) => {
  return (
    <Button
      className={className && className.length > 0 ? className : "button"}
      disabled={disabled ? disabled : false}
      variant={buttonTypes[type]}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClick(e, index as number)
      }
    >
      {capitalizeFirst(content)}
    </Button>
  );
};

export default TButton;

import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { capitalizeFirst } from "../../methods/capitalize";
import "./tButton.css";

type TOnclick = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  index: number
) => void;

interface TButtonProps {
  loading?: boolean;
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
  loading,
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
      <div className="button-wrap">
        {loading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {loading ? (
          <span className="button-wrap__content">
            {capitalizeFirst("generuję ...")}
          </span>
        ) : (
          <span className="button-wrap__content">
            {capitalizeFirst(content)}
          </span>
        )}
      </div>
    </Button>
  );
};

export default TButton;

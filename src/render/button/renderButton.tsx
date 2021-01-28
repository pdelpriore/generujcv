import React from "react";
import TButton from "../../components/button/TButton";

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export const renderButton = (
  className: string,
  disabled: boolean,
  type: string,
  content: string,
  onClick: TOnclick
): JSX.Element => (
  <TButton
    className={className}
    disabled={disabled}
    type={type}
    content={content}
    onClick={onClick}
  />
);

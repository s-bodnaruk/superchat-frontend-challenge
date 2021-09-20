import React, { FC } from "react";

interface IButton {
  label: string;
  type: number;
  background1?: string;
  background2?: string;
  buttonBorderRadius?: string;
}

const Button: FC<IButton> = ({
  label,
  type,
  background1,
  background2,
  buttonBorderRadius,
}) => {
  return (
    <button
      className="button"
      style={{
        backgroundImage: `linear-gradient(-180deg, ${background1} 0%, ${background2} 100%)`,
        borderRadius: buttonBorderRadius,
      }}
    >
      {label} {type}
    </button>
  );
};

export default Button;

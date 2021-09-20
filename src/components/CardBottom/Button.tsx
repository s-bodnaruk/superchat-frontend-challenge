import React, { FC } from "react";

interface IButton {
  label: string;
  type: number;
  background1?: string;
  background2?: string;
  border?: string;
}

const Button: FC<IButton> = ({
  label,
  type,
  background1,
  background2,
  border,
}) => {
  return (
    <button
      className="button"
      style={{
        backgroundImage: `linear-gradient(-180deg, ${background1} 0%, ${background2} 100%)`,
        borderRadius: border,
      }}
    >
      {label} {type}
    </button>
  );
};

export default Button;

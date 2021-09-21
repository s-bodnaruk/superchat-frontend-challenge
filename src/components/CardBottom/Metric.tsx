import React, { FC } from "react";

interface IButton {
  label: string;
  type: number;
  background?: string;
  fontSize?: string;
  borderRadius?: string;
  color?: string;
}

const Metric: FC<IButton> = ({
  label,
  type,
  background,
  fontSize,
  borderRadius,
  color,
}) => {
  return (
    <div
      className="metric"
      style={{
        background: background,
        borderRadius: borderRadius === "square" ? "0" : "8px",
        fontSize:
          fontSize === "medium"
            ? "20px"
            : fontSize === "large"
            ? "24px"
            : "16px",
        color: color,
      }}
    >
      {label} {type}
    </div>
  );
};

export default Metric;

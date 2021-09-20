import React, { FC } from "react";

import Button from "./Button";

interface ICardBottom {
  size: number;
  watchers: number;
  subscribers: number;
  forks: number;
  stars: number;
  buttonBackground1: string;
  buttonBackground2: string;
  buttonBorderRadius: string;
}

const CardBottom: FC<ICardBottom> = ({
  size,
  watchers,
  subscribers,
  forks,
  stars,
  buttonBackground1,
  buttonBackground2,
  buttonBorderRadius,
}) => {
  return (
    <div className="bottom">
      <Button
        label="Size"
        type={size}
        background1={buttonBackground1}
        background2={buttonBackground2}
        buttonBorderRadius={buttonBorderRadius}
      />
      <Button
        label="Watch"
        type={watchers}
        background1={buttonBackground1}
        background2={buttonBackground2}
        buttonBorderRadius={buttonBorderRadius}
      />
      <Button
        label="Subscribers"
        type={subscribers}
        background1={buttonBackground1}
        background2={buttonBackground2}
        buttonBorderRadius={buttonBorderRadius}
      />
      <Button
        label="Forks"
        type={forks}
        background1={buttonBackground1}
        background2={buttonBackground2}
        buttonBorderRadius={buttonBorderRadius}
      />
      <Button
        label="Stars"
        type={stars}
        background1={buttonBackground1}
        background2={buttonBackground2}
        buttonBorderRadius={buttonBorderRadius}
      />
    </div>
  );
};

export default CardBottom;

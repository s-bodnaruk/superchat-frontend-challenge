import React, { FC } from "react";

import Button from "./Button";

interface ICardBottom {
  size: number;
  watchers: number;
  subscribers: number;
  forks: number;
  stars: number;
}

// const background1 = "#c81e81";
// const background2 = "#ffffff";
// const border = "0";

const background1 = "";
const background2 = "";
const border = "";

const CardBottom: FC<ICardBottom> = ({
  size,
  watchers,
  subscribers,
  forks,
  stars,
}) => {
  return (
    <div className="bottom">
      <Button
        label="Size"
        type={size}
        background1={background1}
        background2={background2}
        border={border}
      />
      <Button
        label="Watch"
        type={watchers}
        background1={background1}
        background2={background2}
        border={border}
      />
      <Button
        label="Subscribers"
        type={subscribers}
        background1={background1}
        background2={background2}
        border={border}
      />
      <Button
        label="Forks"
        type={forks}
        background1={background1}
        background2={background2}
        border={border}
      />
      <Button
        label="Stars"
        type={stars}
        background1={background1}
        background2={background2}
        border={border}
      />
    </div>
  );
};

export default CardBottom;

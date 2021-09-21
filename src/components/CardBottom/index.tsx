import React, { FC } from "react";

import Metric from "./Metric";

interface ICardBottom {
  size: number;
  watchers: number;
  subscribers: number;
  forks: number;
  stars: number;
  metricBackground: string;
  metricBorderRadius: string;
  metricFontSize: string;
  metricFontColor: string;
}

const CardBottom: FC<ICardBottom> = ({
  size,
  watchers,
  subscribers,
  forks,
  stars,
  metricBackground,
  metricFontSize,
  metricBorderRadius,
  metricFontColor,
}) => {
  return (
    <div className="bottom">
      <Metric
        label="Size"
        type={size}
        background={metricBackground}
        fontSize={metricFontSize}
        borderRadius={metricBorderRadius}
        color={metricFontColor}
      />
      <Metric
        label="Watch"
        type={watchers}
        background={metricBackground}
        fontSize={metricFontSize}
        borderRadius={metricBorderRadius}
        color={metricFontColor}
      />
      <Metric
        label="Subscribers"
        type={subscribers}
        background={metricBackground}
        fontSize={metricFontSize}
        borderRadius={metricBorderRadius}
        color={metricFontColor}
      />
      <Metric
        label="Forks"
        type={forks}
        background={metricBackground}
        fontSize={metricFontSize}
        borderRadius={metricBorderRadius}
        color={metricFontColor}
      />
      <Metric
        label="Stars"
        type={stars}
        background={metricBackground}
        fontSize={metricFontSize}
        borderRadius={metricBorderRadius}
        color={metricFontColor}
      />
    </div>
  );
};

export default CardBottom;

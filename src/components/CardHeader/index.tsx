import React, { FC } from "react";

import dayjs from "dayjs";

import Avatar from "./Avatar";

interface ICardHeaderProps {
  author: string;
  avatar: string;
  avatarStyle: string;
  date: string;
}

const CardHeader: FC<ICardHeaderProps> = ({
  author,
  avatar,
  date,
  avatarStyle = "rounded",
}) => {
  return (
    <div className="header">
      <Avatar avatar={avatar} avatarStyle={avatarStyle} />
      <div className="header-info">
        <span className="info-title">Owner: </span>
        {author}
      </div>
      <div className="header-info">
        <span className="info-title">Created: </span>
        {dayjs(date).format("DD-MM-YYYY")}
      </div>
    </div>
  );
};

export default CardHeader;

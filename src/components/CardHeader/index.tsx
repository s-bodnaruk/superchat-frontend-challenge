import React, { FC } from "react";

import Avatar from "./Avatar";

interface ICardHeaderProps {
  author: string;
  avatar: string;
  avatarStyle?: string;
  date: string;
}

const CardHeader: FC<ICardHeaderProps> = ({
  author,
  avatar,
  date,
  avatarStyle,
}) => {
  return (
    <div className="header">
      <Avatar
        avatar={avatar}
        // avatarStyle={avatarStyle}
      />
      <div className="header-info">Owner: {author}</div>
      <div className="header-info">Created: {date}</div>
    </div>
  );
};

export default CardHeader;

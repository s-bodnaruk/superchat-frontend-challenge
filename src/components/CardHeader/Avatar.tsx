import React, { FC } from "react";

interface IAvatar {
  avatar: string;
  avatarStyle: string;
}

const Avatar: FC<IAvatar> = ({ avatar, avatarStyle }) => {
  return (
    <div>
      <img
        className="avatar"
        src={avatar}
        alt="Avatar"
        style={{ borderRadius: avatarStyle === "square" ? "8%" : "" }}
      />
    </div>
  );
};

export default Avatar;

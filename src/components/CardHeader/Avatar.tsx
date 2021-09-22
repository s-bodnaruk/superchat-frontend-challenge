import React, { FC } from "react";

interface IAvatarProps {
  avatar: string;
  avatarStyle: string;
}

const Avatar: FC<IAvatarProps> = ({ avatar, avatarStyle }) => {
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

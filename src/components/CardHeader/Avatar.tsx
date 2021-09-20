import React, { FC } from "react";

interface IAvatar {
  avatar: string;
  // avatarStyle: string;
}

const Avatar: FC<IAvatar> = ({ avatar }) => {
  return (
    <div>
      <img
        className="avatar"
        src={avatar}
        alt="Avatar"
        // style={{ avatarStyle }}
      />
    </div>
  );
};

export default Avatar;

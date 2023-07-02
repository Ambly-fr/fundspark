import React from "react";
import "./avatarList.css";
import Image from "next/image";
import Avatar from "../avatar/avatar";

const AvatarStack = ({ avatars }) => {
  const uniqueAvatars = avatars?.reduce((acc, current) => {
    const x = acc.find(item => item.alt === current.alt);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div className="avatar-container">
      {uniqueAvatars?.map((avatar, index) => (
        <div
          key={index}
          className="avatar"
          style={{ zIndex: uniqueAvatars.length - index, marginLeft: index * 30 }}
        >
          <Avatar img={avatar?.src} alt={avatar.alt} />
        </div>
      ))}
    </div>
  );
};

export default AvatarStack;

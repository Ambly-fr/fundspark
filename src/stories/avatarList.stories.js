import React from "react";

import AvatarList from "../components/avatarList/avatarList";

export default {
  tags: ["autodocs"],
  title: "Basic/AvatarList",
  component: AvatarList,
};

export const Avatarlist = {
  args: {
    avatars: [
      { src: "https://via.placeholder.com/40", alt: "Avatar 1" },
      { src: "https://via.placeholder.com/40", alt: "Avatar 2" },
      { src: "https://via.placeholder.com/40", alt: "Avatar 3" },
    ],
  },
};

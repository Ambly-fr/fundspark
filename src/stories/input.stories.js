import React from "react";
import Input from "../components/input/input";

export default {
  tags: ["autodocs"],
  title: "Basic/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["Default", "MultiLine", "Password", "Email"],
    },
    status: {
      control: { type: "select" },
      options: ["Default", "Error", "Validate"],
    },
  },
};

export const SingleLine = {
  args: {
    type: "Default",
    status: "Default",
    help:true,
    label: "Label",
    helper: "This text is an helper",
  },
};

export const Password = {
  args: {
    type: "Password",
    status: "Default",
    help:true,
    label: "Password",
    helper: "This text is an helper",
  },
};

export const Multiline = {
  args: {
    type: "Multiline",
    status: "Default",
    help:true,
    label: "Multiline",
    helper: "This text is an helper",
  },
};

export const Email = {
  args: {
    type: "Email",
    status: "Default",
    help:true,
    label: "Email",
    helper: "This text is an helper",
  },
};

export const Search = {
    args: {
      type: "Search",
      status: "Default",
      help:true,
      label: "search",
      helper: "This text is an helper",
    },
  };
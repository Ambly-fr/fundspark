import React from "react";
import Input from "../components/input/input";

export default {
  tags: ["autodocs"],
  title: "Input",
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

export const singleLine = {
  args: {
    type: "Default",
    status: "Default",
    label: "Label",
    helper: "This text is an helper",
  },
};

export const password = {
  args: {
    type: "Password",
    status: "Default",
    label: "Password",
    helper: "This text is an helper",
  },
};

export const multiline = {
  args: {
    type: "Multiline",
    status: "Default",
    label: "Multiline",
    helper: "This text is an helper",
  },
};

export const email = {
  args: {
    type: "Email",
    status: "Default",
    label: "Email",
    helper: "This text is an helper",
  },
};

export const search = {
    args: {
      type: "Search",
      status: "Default",
      label: "search",
      helper: "This text is an helper",
    },
  };
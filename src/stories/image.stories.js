import React from "react";
import Illustration from "../components/image/image";

export default {
    tags: ["autodocs"],
    title: "Basic/Illustration",
    component: Illustration,
    argTypes: {
        type: {
            control: { type: "select" },
            options:["project", "content","default"],
        },
    },
};

export const Project ={
    args: {
        src: "https://via.placeholder.com/384x240",
        type: "project",
        alt:"project",
    },
}
export const Content ={
    args: {
        src: "https://via.placeholder.com/1216x400",
        type: "content",
        alt:"project",
    },
}
export const Default ={
    args: {
        src: "https://via.placeholder.com/720x480",
        type: "default",
        alt:"project",
    },
}
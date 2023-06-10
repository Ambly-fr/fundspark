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
        src: "https://picsum.photos/240/384",
        type: "project",
        alt:"project",
    },
}
export const Content ={
    args: {
        src: "https://picsum.photos/1216/400",
        type: "content",
        alt:"project",
    },
}
export const Default ={
    args: {
        src: "https://picsum.photos/480/720",
        type: "default",
        alt:"project",
    },
}
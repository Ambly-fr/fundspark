import React from "react";
import Button from "../components/button/button";

export default {
    tags: ["autodocs"],
    title: "Button",
    component: Button,
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["XL", "XS", "LinkXS", "LinkXL"],
        },
    },
};

export const xl ={
    args: {
        type: "XL",
        label: "Primary",
    },
}
export const xs ={
    args: {
        type: "XS",
        label: "Primary",
    },
}
export const linkXS ={
    args: {
        type: "LinkXS",
        label: "Primary",
    },
}
export const linkXL ={
    args: {
        type: "LinkXL",
        label: "Primary",
    },
}
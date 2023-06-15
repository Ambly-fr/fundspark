import React from "react";
import Button from "../components/button/button";

export default {
    tags: ["autodocs"],
    title: "Basic/Button",
    component: Button,
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["XL", "XS", "LinkXS", "LinkXL"],
        },
    },
};

export const Xl ={
    args: {
        type: "XL",
        label: "Primary",
    },
}
export const Xs ={
    args: {
        type: "XS",
        label: "Primary",
    },
}
export const LinkXS ={
    args: {
        type: "LinkXS",
        label: "Primary",
    },
}
export const LinkXL ={
    args: {
        type: "LinkXL",
        label: "Primary",
    },
}
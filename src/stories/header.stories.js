import React from "react";
import Header from "../components/header/header";

export default{
    tags:["autodocs"],
    title:"Complex/Header",
    component:Header,
};

export const Unsigned = {
    args:{
        signed:false,
        avatarImg:"https://via.placeholder.com/40",
    }
}

export const Signed = {
    args:{
        signed:true,
        avatarImg:"https://via.placeholder.com/40",
    }
}
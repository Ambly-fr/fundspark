import React from "react";
import Text from "../components/text/text";

export default {
    tags: ["autodocs"],
    title: "Basic/Text",
    component: Text,
    argType:{
        children: {
            control: { type: "text" },
        },
        variant: {
            control: { type: "select" },
            options: ["title", "subtitle", "projectname", "number", "supportingtext", "textmedium", "preheading", "corp", "description"],
        },
    },
};

export const Title ={
    args: {
        children: "Title",
        variant: "title",
},};
export const SubTitle ={
    args: {
        children: "Title",
        variant: "subtitle",
},};

export const ProjectName ={
    args: {
        children: "Title",
        variant: "projectname",
},};
export const Number ={
    args: {
        children: "5000",
        variant: "number",
},};
export const Supporting ={
    args: {
        children: "FundSpark, la plateforme de crowdfunding de choix pour des milliers d'innovateurs et de contributeurs du monde entier.",
        variant: "supportingtext",
},};

export const Textmedium ={
    args: {
        children: "Projets financés",
        variant: "textmedium",
},};

export const Preheading ={
    args: {
        children: "Technologies vertes",
        variant: "preheading",
},};

export const Corp ={
    args: {
        children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
        variant: "corp",
},};

export const Description ={
    args: {
        children: "EcoDrone vise à développer des drones alimentés par de l'énergie solaire pour des applications de surveillance environnementale. ",
        variant: "description",
},};
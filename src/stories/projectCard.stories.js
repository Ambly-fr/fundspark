import React from "react";
import ProjectCard from "../components/projectCard/projectCard";

export default {
    title: "Complex/Project Card",
    component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "EcoDrone",
    description: "EcoDrone vise à développer des drones alimentés par de l'énergie solaire pour des applications de surveillance environnementale. ",
    imgSrc: "https://via.placeholder.com/384x240",
    category: "Technologies vertes",
    link: "https://www.google.com",
    progress:{
        current: 35000,
        total: 50000,
    },
    user:{
        name: "Jean Dupont",
        img: "https://via.placeholder.com/40",
    },
    date:"15 mars 2023",
};
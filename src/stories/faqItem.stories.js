import React from "react";
import FaqItem from "../components/faqItem/faqItem";

export default{
    tags:["autodocs"],
    title:"Basic/FAQ Item",
    component:FaqItem,
};

export const Open = {
    args:{
        line:true,
        title:'Quel est le processus de validation des projets sur FundSpark ?',
        corp:'Créez simplement un compte, cliquez sur "Démarrer un projet" et suivez les instructions.',
    }
}

export const Close = {
    args:{
        title:'Quel est le processus de validation des projets sur FundSpark ?',
        corp:'Créez simplement un compte, cliquez sur "Démarrer un projet" et suivez les instructions.',
        line:true,
    }
}
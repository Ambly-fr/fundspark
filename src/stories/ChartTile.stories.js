import React from "react";
import ChartComponent from "../components/ChartTile/ChartTile";

export default {
    tags: ["autodocs"],
    title: "Complex/ChartTile",
    component: ChartComponent,
};

export const ChartTile = {
    args:{
        title: "Total customers",
        data:"2,420",
        variation: '40%',
        arrow: true,
        chartData: {
            labels: ['Mai', 'Juin', 'Juillet', 'Août'],
            values: [50, 70, 60, 90],
          },
    }
}
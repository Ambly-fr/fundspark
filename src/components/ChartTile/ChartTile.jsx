import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import gradient from "chartjs-plugin-gradient";
import Text from "../text/text";
import "./ChartTile.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


//import arrow svg as react component
import Up from "./arrowIcon.svg";
import Down from "../../assets/arrowDown.svg";
import Image from "next/image";


Chart.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  gradient,
  Tooltip
);

const ChartComponent = ({ title, data, variation, chartData,arrow }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const chartOptions = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Mon Dataset",
        data: chartData.values,
        borderColor: "rgba(84, 77, 243, 1)",
        tension: 0.4,
        fill: true,
        borderWidth: 4,
        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              0: "rgba(84, 77, 243, 0)",
              100: "rgba(84, 77, 243, 0.7)",
            },
          },
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      gradient,
    },
    elements: {
      line: {
        borderColor: "rgba(84, 77, 243, 1)",
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="ChartTile">
      <div className="headlineAndDropdown">
        <Text variant="projectname">{title}</Text>
        <IconButton onClick={handleClick}>
          <MoreVertIcon style={{color:"white"}} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          {/* Ajouter plus d'options ici */}
        </Menu>
      </div>
      <div className="numberAndChart">
        <div className="data">
          <Text variant={"number"}>{data}</Text>
          
          <Text variant={"preheading"}><Image width={15} height={15} alt="arrow" src={arrow?Up:Down}/>  {variation} vs last month</Text>
        </div>
        <div className="chart">
          <Line data={chartOptions} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;

import React from "react";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import "./progressBar.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#7861F3',
    },
  }));

export default function ProgressBar({ current, total }) {
  const percent = Math.floor((current / total) * 100);
  return (
    <div className="progressBar">
      <BorderLinearProgress variant="determinate" value={percent} />
      <div className="infoContainer">
        <span className="percetage">{percent} %</span>
        <span className="info">
          {current}€ sur {total}€
        </span>
      </div>
    </div>
  );
}

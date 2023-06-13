import React from "react";
import "./metricItem.css";
import Text from "../text/text";

export default function MetricItem({ number, supporting, title }) {
  return (
    <div className="Metric_item">
      <Text variant="number">{number}</Text>
      <div className="text">
        <Text variant="textmedium">{title}</Text>
        <Text variant="metricmedium">{supporting}</Text>
      </div>
    </div>
  );
}

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { stackedCustomSeries } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

// Merge stacked series into recharts format: [{name: 'Jan', Budget: 111, Expense: 111}, ...]
const buildStackedData = () => {
  if (!stackedCustomSeries.length) return [];
  const labels = stackedCustomSeries[0].dataSource.map((d) => d.x);
  return labels.map((label, i) => {
    const row = { name: label };
    stackedCustomSeries.forEach((series) => {
      row[series.name] = series.dataSource[i]?.y ?? 0;
    });
    return row;
  });
};

const data = buildStackedData();

const StackChart = ({ width, height }) => {
  const { currentColor, currentMode } = useStateContext();
  const textColor = currentMode === "Dark" ? "#fff" : "#33373e";
  const gridColor = currentMode === "Dark" ? "#444" : "#e0e0e0";

  return (
    <ResponsiveContainer width={width || "100%"} height={parseInt(height) || 420}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="name" stroke={textColor} />
        <YAxis stroke={textColor} domain={[100, 400]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Budget" stackId="a" fill={currentColor} />
        <Bar dataKey="Expense" stackId="a" fill="#454545" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackChart;

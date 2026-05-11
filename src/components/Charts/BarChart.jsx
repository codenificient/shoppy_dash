import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useStateContext } from "../../context/ContextProvider";

// data prop is barCustomSeries from dummy.js — shape: [{dataSource:[{x,y}], name}, ...]
// xAxis/yAxis props are legacy config objects — ignored here
const buildBarData = (data) => {
  if (!data || !data.length) return [];
  const labels = data[0].dataSource.map((d) => d.x);
  return labels.map((label, i) => {
    const row = { name: label };
    data.forEach((series) => {
      row[series.name] = series.dataSource[i]?.y ?? 0;
    });
    return row;
  });
};

const COLORS = ["#FFD700", "#C0C0C0", "#CD7F32"];

const BarChart = ({ xAxis, data, yAxis, title }) => {
  const { currentMode } = useStateContext();
  const textColor = currentMode === "Dark" ? "#fff" : "#33373e";
  const gridColor = currentMode === "Dark" ? "#444" : "#e0e0e0";
  const chartData = buildBarData(data);
  const seriesNames = data ? data.map((s) => s.name) : [];

  return (
    <ResponsiveContainer width="100%" height={520}>
      <RechartsBarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="name" stroke={textColor} />
        <YAxis stroke={textColor} />
        <Tooltip />
        <Legend />
        {seriesNames.map((name, idx) => (
          <Bar key={name} dataKey={name} fill={COLORS[idx % COLORS.length]} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;

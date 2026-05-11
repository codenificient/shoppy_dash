import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useStateContext } from "../../context/ContextProvider";

// rangeData: [{label, start, end, colors:[hex]}, ...]
const getColorForValue = (y, rangeData) => {
  if (!rangeData) return "#03C9D7";
  for (const range of rangeData) {
    if (y >= Number(range.start) && y <= Number(range.end)) {
      return range.colors[0];
    }
  }
  return "#ccc";
};

// sourceData: [[{x, y}, ...], ...]  — we use index 0
const ColorMappingChart = ({ xAxis, yAxis, sourceData, rangeData }) => {
  const { currentMode } = useStateContext();
  const textColor = currentMode === "Dark" ? "#fff" : "#33373e";
  const gridColor = currentMode === "Dark" ? "#444" : "#e0e0e0";

  const data = sourceData && sourceData[0] ? sourceData[0] : [];

  return (
    <ResponsiveContainer width="100%" height={520}>
      <BarChart data={data}>
        <XAxis dataKey="x" stroke={textColor} label={{ value: "Months", position: "insideBottom", offset: -2, fill: textColor }} />
        <YAxis stroke={textColor} tickFormatter={(v) => `${v}°C`} label={{ value: "Temperature", angle: -90, position: "insideLeft", fill: textColor }} />
        <Tooltip formatter={(v) => `${v}°C`} />
        <Bar dataKey="y" radius={[6, 6, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColorForValue(entry.y, rangeData)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ColorMappingChart;

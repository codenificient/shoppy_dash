import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useStateContext } from "../../context/ContextProvider";

// Pyramid fallback: horizontal bar chart sorted descending (widest at base)
const COLORS = ["#03C9D7", "#FF5C8E", "#7352FF", "#1A97F5", "#FB9678", "#00C292"];

const PyramidChart = ({ id, data, legendVisiblity, height, title }) => {
  const { currentMode } = useStateContext();
  const textColor = currentMode === "Dark" ? "#fff" : "#33373e";

  const sorted = data ? [...data].sort((a, b) => b.y - a.y) : [];

  return (
    <ResponsiveContainer width="100%" height={height === "full" ? 420 : (parseInt(height) || 420)}>
      <BarChart layout="vertical" data={sorted}>
        <XAxis type="number" stroke={textColor} />
        <YAxis type="category" dataKey="x" width={160} stroke={textColor} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(v, n, p) => [`${v} cal`, p.payload.x]} />
        <Bar dataKey="y" radius={[0, 6, 6, 0]}>
          {sorted.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PyramidChart;

import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useStateContext } from "../../context/ContextProvider";

const COLORS = ["#03C9D7", "#FF5C8E", "#7352FF", "#1A97F5", "#FB9678", "#00C292", "#FFD700"];

const PieChart = ({ id, data, legendVisiblity, height, title }) => {
  const { currentMode } = useStateContext();

  return (
    <ResponsiveContainer width="100%" height={height === "full" ? 420 : (parseInt(height) || 420)}>
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey="y"
          nameKey="x"
          cx="50%"
          cy="50%"
          innerRadius="35%"
          outerRadius="65%"
          label={({ x, text }) => text || x}
        >
          {data && data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [value, name]} />
        {legendVisiblity && <Legend />}
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;

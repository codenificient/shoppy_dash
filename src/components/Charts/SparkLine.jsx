import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// data prop: array of {x, yval} objects
const SparkLine = ({ id, height, width, color, data, type, currentColor }) => (
  <ResponsiveContainer width={width || "100%"} height={parseInt(height) || 80}>
    <LineChart data={data}>
      <Line
        type="monotone"
        dataKey="yval"
        stroke={currentColor || color || "#03C9D7"}
        dot={false}
        strokeWidth={2}
      />
      <Tooltip
        formatter={(v, n, p) => [v, "data"]}
        labelFormatter={(label) => `${label}`}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default SparkLine;

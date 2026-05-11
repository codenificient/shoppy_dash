import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineChartData } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

// Merge the three series into one array of objects for recharts
const mergeLineData = () => {
  const years = lineChartData[0].map((d) => d.x.getFullYear());
  return years.map((year, i) => ({
    year,
    Germany: lineChartData[0][i].y,
    England: lineChartData[1][i].y,
    India: lineChartData[2][i].y,
  }));
};

const data = mergeLineData();

const LineChart = ({ title }) => {
  const { currentMode } = useStateContext();
  const textColor = currentMode === "Dark" ? "#fff" : "#33373e";
  const gridColor = currentMode === "Dark" ? "#444" : "#e0e0e0";

  return (
    <ResponsiveContainer width="100%" height={520}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="year" stroke={textColor} />
        <YAxis stroke={textColor} tickFormatter={(v) => `${v}%`} />
        <Tooltip formatter={(v) => `${v}%`} />
        <Legend />
        <Line type="monotone" dataKey="Germany" stroke="#03C9D7" dot={{ r: 5 }} strokeWidth={2} />
        <Line type="monotone" dataKey="England" stroke="#FF5C8E" dot={{ r: 5 }} strokeWidth={2} />
        <Line type="monotone" dataKey="India" stroke="#7352FF" dot={{ r: 5 }} strokeWidth={2} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;

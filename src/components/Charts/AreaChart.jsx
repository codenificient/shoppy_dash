import React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { areaCustomSeries } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

// Merge three area series into recharts format
const mergeAreaData = () => {
  const series0 = areaCustomSeries[0].dataSource;
  return series0.map((d, i) => ({
    year: d.x.getFullYear(),
    USA: areaCustomSeries[0].dataSource[i].y,
    France: areaCustomSeries[1].dataSource[i].y,
    Germany: areaCustomSeries[2].dataSource[i].y,
  }));
};

const data = mergeAreaData();

const AreaChart = ({ title }) => {
  const { currentMode } = useStateContext();
  const textColor = currentMode === "Dark" ? "#fff" : "#33373e";
  const gridColor = currentMode === "Dark" ? "#444" : "#e0e0e0";

  return (
    <ResponsiveContainer width="100%" height={520}>
      <RechartsAreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="year" stroke={textColor} />
        <YAxis stroke={textColor} tickFormatter={(v) => `${v}%`} domain={[0, 4]} />
        <Tooltip formatter={(v) => `${v}%`} />
        <Legend />
        <Area type="monotone" dataKey="USA" stroke="#03C9D7" fill="#03C9D7" fillOpacity={0.4} strokeWidth={2} />
        <Area type="monotone" dataKey="France" stroke="#FF5C8E" fill="#FF5C8E" fillOpacity={0.4} strokeWidth={2} />
        <Area type="monotone" dataKey="Germany" stroke="#7352FF" fill="#7352FF" fillOpacity={0.4} strokeWidth={2} />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;

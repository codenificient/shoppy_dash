import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useStateContext } from "../../context/ContextProvider";

// sourceData has shape: [{x: Date, open, high, low, close, volume}, ...]
// We render close price as a line chart (pragmatic fallback for candlestick)
const FinancialChart = ({ xAxis, yAxis, sourceData }) => {
  const { currentMode } = useStateContext();
  const textColor = currentMode === "Dark" ? "#fff" : "#33373e";
  const gridColor = currentMode === "Dark" ? "#444" : "#e0e0e0";

  const data = (sourceData || []).map((d) => ({
    date: d.x instanceof Date ? d.x.toLocaleDateString("en-US", { month: "short", year: "2-digit" }) : String(d.x),
    close: d.close,
    high: d.high,
    low: d.low,
  }));

  return (
    <ResponsiveContainer width="100%" height={520}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="date" stroke={textColor} tick={{ fontSize: 11 }} />
        <YAxis stroke={textColor} domain={[100, 180]} tickFormatter={(v) => `$${v}`} />
        <Tooltip formatter={(v) => `$${v.toFixed(2)}`} />
        <Line type="monotone" dataKey="close" stroke="#1A97F5" dot={false} strokeWidth={2} name="Close" />
        <Line type="monotone" dataKey="high" stroke="#00C292" dot={false} strokeWidth={1} strokeDasharray="4 2" name="High" />
        <Line type="monotone" dataKey="low" stroke="#FF5C8E" dot={false} strokeWidth={1} strokeDasharray="4 2" name="Low" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FinancialChart;

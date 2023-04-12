import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  lineCustomSeries,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider"

const LineChart = ({title}) => {
  const {currentMode} = useStateContext()
  return (
    <ChartComponent
      id="line-chart"
      height="520px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
      title={title}
      titleStyle={currentMode === "Dark" ? "#fff" : "#33373e"}
    >
      <Inject services={[Tooltip, LineSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, idx) => (
          <SeriesDirective key={idx} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;

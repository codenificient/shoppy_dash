import {
  Inject,
  ChartComponent,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import React from "react";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const StackChart = ({ width, height }) => {
  return (
    <ChartComponent
      id="charts"
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enabled: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackChart;

import React from 'react'
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../context/ContextProvider";

const PyramidChart = ({ id, data, legendVisiblity, height, title }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: "white" }}
      height={height}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      tooltip={{ enable: true }}
      title={title}
    >
      <Inject
        services={[
          AccumulationLegend,
          PyramidSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
          AccumulationSelection,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Food"
          dataSource={data}
          xName="x"
          yName="y"
          explode
          type="Pyramid"
          width="45%"
          height="80%"
          neckWidth="15%"
          gapRatio={0.03}
          emptyPointSettings={{ mode: "Drop", fill: "red" }}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PyramidChart
import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      dataSource={data}
      fill={color}
      border={{ color: currentColor, width: 1 }}
      type={type}
      lineWidth={1}
      xName="xval"
      yName="yval"
      valueType="Numeric"
      tooltipSettings={{
        trackLineSettings: {
          visible: true,
        },
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${xval} : data ${yval}",
        // fill: "#033e96",
        textStyle: {
          color: "white",
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;

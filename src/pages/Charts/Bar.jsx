import React from "react";
import { BarChart, Header } from "../../components";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const Bar = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Bar"} />
      
      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        Olympic Medal Counts - RIO
      </p>

      <div className="w-full">
        <BarChart
          id={"doughnout"}
          data={barCustomSeries}
          xAxis={barPrimaryXAxis}
          yAxis={barPrimaryYAxis}
          height="full"
        />
      </div>
    </div>
  );
};

export default Bar;

import React from "react";
import { Header } from "../../components";
import AreaChart from "../../components/Charts/AreaChart";

const Area = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Area"} />
      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        Inflation Rate in percentage
      </p>
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  );
};

export default Area;

import React from 'react'
import { Header, FinancialChart } from "../../components";
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

const Financial = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Financial"} />

      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        AAPLE Historical
      </p>

      <div className="w-full">
        <FinancialChart xAxis={FinancialPrimaryXAxis} yAxis={FinancialPrimaryYAxis} sourceData={financialChartData} />
      </div>
    </div>
  );
}

export default Financial;

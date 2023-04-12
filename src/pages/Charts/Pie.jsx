import React from 'react'
import { Header, Pie as PieChart } from '../../components'
import { pieChartData } from '../../data/dummy'

const Pie = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Pie "} />
      
      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        Project Cost Breakdown
      </p>

      <div className="w-full">
        <PieChart
          id={"doughnout"}
          data={pieChartData}
          legendVisiblity
          height="full"

        />
      </div>
    </div>
  );
}

export default Pie

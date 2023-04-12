import React from 'react'
import { Header } from '../../components'
import StackChart from '../../components/Charts/StackChart'

const Stacked = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Stacked "} />

      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        Revenue Breakdown
      </p>

      <div className="w-full">
        <StackChart />
      </div>
    </div>
  );
}

export default Stacked
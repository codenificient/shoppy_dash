import React from 'react'
import { Header, LineChart } from '../../components'

const Line = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Line"} />

      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        Inflation Rate
      </p>

      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}

export default Line
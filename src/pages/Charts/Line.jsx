import React from 'react'
import { Header, LineChart } from '../../components'

const Line = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl md:m-10 md:p-10 dark:bg-secondary-dark-bg ">
      <Header category={"Chart"} title={"Inflation Rate"} />
      
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}

export default Line
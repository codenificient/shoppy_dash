import React from 'react'
import { Header, PyramidChart } from "../../components";
import { PyramidData } from '../../data/dummy'

const Pyramid = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Pyramid "} />

      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        Food Comparison Chart
      </p>

      <div className="w-full">
        <PyramidChart
          id={"doughnout"}
          data={PyramidData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
}

export default Pyramid

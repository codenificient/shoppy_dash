import React from 'react'
import { ColorMappingChart, Header } from '../../components'
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";

const ColorMapping = () => {
  return (
    <div className="p-4 m-4 mt-5 bg-white rounded-3xl dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={"Chart"} title={"Color Mapping "} />

      <p class="mb-2 mt-3 text-center text-xl dark:text-gray-200">
        USA CLIMATE - WEATHER BY MONTH
      </p>

      <div className="w-full">
        <ColorMappingChart xAxis={ColorMappingPrimaryXAxis} yAxis={ColorMappingPrimaryYAxis} sourceData={colorMappingData} rangeData={rangeColorMapping} />
      </div>
    </div>
  );
}

export default ColorMapping
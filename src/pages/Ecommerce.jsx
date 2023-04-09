import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

import { Button, SparkLine } from "../components";
import { SparklineAreaData, earningData } from "../data/dummy";
import StackChart from "../components/Charts/StackChart"

const Ecommerce = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover h-44 rounded-xl bg-hero-pattern pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-3xl">$80,934</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1 m-3 ">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-white rounded-2xl pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 "
            >
              <button
                type="button"
                style={{ color: item.iconColor, background: item.iconBg }}
                className="opacity-0.9 rounded-full p-4 text-2xl hover:drop-shadow-xl "
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 ">
        <div className="p-4 m-3 bg-white rounded-2xl dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780 ">
          <div className="flex justify-center">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="pr-10 m-4 border-r-1 border-color">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$97,643</span>
                  <span className="ml-3 cursor-pointer rounded-full  bg-green-400  p-1.5 text-xs text-white hover:drop-shadow-xl ">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$57,643</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  height="80px"
                  width="250px"
                  type="Line"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>


            <div>
              <StackChart width="320px" height="360px" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

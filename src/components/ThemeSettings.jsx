import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import { themeColors } from "../data/dummy";

const ThemeSettings = () => {
  const { currentColor, currentMode, setMode, setColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="fixed top-0 right-0 w-screen nav-item bg-half-transparent ">
      <div className="dark:bg-[#484b52] float-right h-screen w-400 bg-white dark:text-gray-200 ">
        <div className="flex items-center justify-between p-4 ml-4 ">
          <p className="text-xl font-bold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="p-2 text-2xl hover:bg-light-gray hover:drop-shadow-2xl"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col p-3 ml-4 border-t-1 border-color ">
          <p className="text-lg font-bold">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="light"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 cursor-pointer text-md">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="dark"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 cursor-pointer text-md">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col p-3 ml-4 border-t-1 border-color ">
          <p className="text-lg font-bold">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, idx) => (
              <TooltipComponent
                key={idx}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative flex items-center gap-5 mt-2 cursor-pointer ">
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-white text-2xl ${item.color == currentColor ? "block" : "hidden" }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;

import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Header } from "../components";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="p-2 m-2 bg-white rounded-3xl md:m-10 md:p-10">
      <Header category={"App"} title={"Color Picker"} />

      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-4">
          <p className="mt-2 mb-3 text-2xl font-semibold">Color Picker</p>
          <HexColorPicker color={color} onChange={setColor} />
          <div className="flex items-center gap-3 mt-4">
            <div
              className="h-10 w-20 rounded-lg border border-gray-300"
              style={{ backgroundColor: color }}
            />
            <span className="text-lg font-mono font-semibold">{color}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

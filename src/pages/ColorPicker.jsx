import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";
import { Header } from "../components";

const change = args => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className="p-2 m-2 bg-white rounded-3xl md:m-10 md:p-10 ">
      <Header category={"App"} title={"Color Picker"} />

      <div className="text-center">
        <div id="preview" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-20">
        <div>
          <p className="mt-2 mb-3 text-2xl font-semibold ">Inline Palette</p>
          <ColorPickerComponent
            id="inline-palette"
            mode="Palette"
            inline
            showButtons={false}
            change={change}
          />
        </div>
        <div>
          <p className="mt-2 mb-3 text-2xl font-semibold ">Inline Picker</p>
          <ColorPickerComponent
            id="inline-picker"
            mode="Picker"
            inline
            showButtons={false}
            change={change}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

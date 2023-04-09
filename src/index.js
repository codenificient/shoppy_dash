import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ContextProvider } from "./context/ContextProvider";
import "./index.css";
// console.log(process.env.REACT_APP_SF);
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

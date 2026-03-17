import React from "react";
import { createRoot } from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";
import App from "./App";

import { ContextProvider } from "./context/ContextProvider";
import "./index.css";

// Register Syncfusion license key from environment variable
if (process.env.REACT_APP_SYNCFUSION_LICENSE) {
  registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE);
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

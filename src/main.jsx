// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SalesProvider } from "./context/SalesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SalesProvider>
      <App />
    </SalesProvider>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { NextUIProvider } from "@nextui-org/react";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="darkblue bg-background w-screen h-screen">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";          // Your Tailwind + custom CSS
import "lenis/dist/lenis.css"; // Lenis library styling (if used)

createRoot(document.getElementById("root")).render(
  // Remove <StrictMode> to avoid double mounting in dev
  <App />
);

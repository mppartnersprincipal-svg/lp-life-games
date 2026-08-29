import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App3d from "./App3d.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App3d />
  </StrictMode>
);

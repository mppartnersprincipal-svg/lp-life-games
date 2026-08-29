import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRetro from "./AppRetro.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRetro />
  </StrictMode>
);

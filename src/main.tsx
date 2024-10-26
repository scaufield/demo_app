import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { prostFNOtPizdi2 as Idi} from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Idi />
  </StrictMode>,
);

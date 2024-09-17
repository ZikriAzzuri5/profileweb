import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "./styles/global.scss"; // Impor file SCSS global

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

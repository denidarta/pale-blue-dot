import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/fonts.css";
import InvestmentProgress from "./components/ProgressBar/InvestmentProgress";
import NavBar from "./components/NavBar/NavBar";
import "./styles/global.css";

const margin: React.CSSProperties = {
  margin: "20px",
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <NavBar />
      <div style={margin} />
      <InvestmentProgress totalStock={2000} invested={1000} booked={200} />
    </div>
  </React.StrictMode>
);
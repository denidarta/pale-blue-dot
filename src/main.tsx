import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main style={{ padding: "1rem", maxWidth: "390px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: "1rem" }}>
        <h1 style={{ fontSize: "1.5rem" }}>Component Preview</h1>
      </header>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Button Component</h2>
        <Button label="Click Me" onClick={() => alert("Button clicked")} />
      </section>

      {/* You can add more sections for other components as you build them */}
    </main>
  </React.StrictMode>
);
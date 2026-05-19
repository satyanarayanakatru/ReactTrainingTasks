import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Theme.css";

function Theme({ lightMode, setLightMode }) {
  return (
    <div className="theme-container">
      <button className="theme-btn" onClick={() => setLightMode(!lightMode)}>
        {lightMode ? <FaMoon /> : <FaSun />}

        <span>Switch to {lightMode ? "Dark" : "Light"} Mode</span>
      </button>

      <h2 className="theme-text">
        {lightMode ? <FaSun /> : <FaMoon />}

        <span>Welcome to {lightMode ? "Light Mode" : "Dark Mode"}</span>
      </h2>
    </div>
  );
}

export default Theme;

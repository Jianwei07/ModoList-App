import React, { useState } from "react";
import "./theme-changer.css";

function ThemeChanger({ onThemeChange }) {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [showOptions, setShowOptions] = useState(false);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    onThemeChange(theme);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="theme-changer-container">
      <div className="theme-changer">
        <button
          className={`theme-button current-theme ${selectedTheme}`}
          onClick={toggleOptions}
        >
          Current Theme: {selectedTheme}
        </button>
        {showOptions && (
          <div className="theme-options">
            <button
              className={`theme-button light ${
                selectedTheme === "light" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("light")}
            >
              Light
            </button>
            <button
              className={`theme-button dark ${
                selectedTheme === "dark" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("dark")}
            >
              Dark
            </button>
            <button
              className={`theme-button summer ${
                selectedTheme === "summer" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("summer")}
            >
              Summer
            </button>
            <button
              className={`theme-button spring ${
                selectedTheme === "spring" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("spring")}
            >
              Spring
            </button>
            <button
              className={`theme-button fall ${
                selectedTheme === "fall" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("fall")}
            >
              Fall
            </button>
            <button
              className={`theme-button winter ${
                selectedTheme === "winter" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("winter")}
            >
              Winter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThemeChanger;

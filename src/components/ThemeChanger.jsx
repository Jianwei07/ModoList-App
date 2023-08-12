import React, { useState, useRef, useEffect } from "react";
import "./theme-changer.css";

function ThemeChanger({ onThemeChange }) {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    onThemeChange(theme);
    setMenuOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="theme-changer-container">
      <button
        className={`theme-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Theme
      </button>
      <div className={`theme-menu ${menuOpen ? "active" : ""}`} ref={menuRef}>
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
        {/* Add buttons for other themes */}
      </div>
    </div>
  );
}

export default ThemeChanger;

import React from "react";
import ThemeChanger from "./ThemeChanger";

function Header() {
  return (
    <header className="header">
      <h1>ModoList</h1>
      <ThemeChanger />
    </header>
  );
}

export default Header;

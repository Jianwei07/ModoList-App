import React from "react";

function Header({ currentTheme }) {
  return (
    <header className={`header-${currentTheme}`}>
      {/* Header content */}
      <h1>ModoList</h1>
      {/* ... Other header content */}
    </header>
  );
}

export default Header;

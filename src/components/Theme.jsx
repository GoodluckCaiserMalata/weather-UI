import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function Theme(params) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`theme-button ${isLightTheme ? "light-mode" : "dark-mode"}`}
    >
      <button onClick={toggleTheme}>
        {isLightTheme ? (
          <FiMoon size={32} color="blue" />
        ) : (
          <FiSun size={32} color="orange" />
        )}
      </button>
    </div>
  );
}

export default Theme;

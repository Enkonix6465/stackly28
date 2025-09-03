import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
export const DarkModeContext = createContext();

// Provider
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // ✅ Load from localStorage on first render
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // ✅ Save to localStorage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // ✅ Set data-theme attribute on HTML tag for global theming
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook
export const useDarkMode = () => useContext(DarkModeContext);

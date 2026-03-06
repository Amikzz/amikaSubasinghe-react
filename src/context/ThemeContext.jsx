import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Sync with the inline <head> script that already applied the class
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    // Default dark (matches inline script)
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    // Toggle class — inline script already set the initial state,
    // so this only fires on subsequent theme changes (no FOUC)
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

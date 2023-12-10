"use client";

import { createContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  toggle: () => void;
  mode: string | null;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggle: () => {},
  mode: null,
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (error) {
      console.error("Error getting theme from localStorage:", error);
      return "light";
    }
  });

  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    try {
      localStorage.setItem("theme", newMode);
    } catch (error) {
      console.error("Error setting theme in localStorage:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

"use client";

import { createContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextProps {
  toggle: () => void;
  mode: string;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggle: () => {},
  mode: "",
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("theme");
      return storedMode !== null ? storedMode : "";
    }
    return "";
  });

  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newMode);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", mode);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

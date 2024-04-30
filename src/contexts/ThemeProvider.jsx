"use client";
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("kp-theme");

    if (localTheme) {
      setTheme(localTheme);
      document.body.setAttribute("data-theme", localTheme);
    } else {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      document.body.setAttribute(
        "data-theme",
        {
          true: "dark",
          false: "light",
        }[prefersDarkMode.matches]
      );

      setTheme(prefersDarkMode.matches ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("kp-theme", "dark");
        return "dark";
      } else {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("kp-theme", "light");
        return "light";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

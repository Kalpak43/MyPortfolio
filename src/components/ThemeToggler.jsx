"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <md-outlined-button onClick={() => toggleTheme()}>
      <span className="material-symbols-outlined block">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </md-outlined-button>
  );
}

"use client";

import React, { useContext } from "react";
import "@material/web/button/text-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";
import { ThemeContext } from "@/contexts/ThemeProvider";

export default function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-4 h-screen flex flex-col justify-between bg-[var(--md-sys-color-surface-container)]">
      {/* <md-text-button>
        <span className="material-symbols-outlined block">menu</span>
      </md-text-button> */}
      <div className="flex flex-col gap-y-4">
        <md-text-button class="active" title="home">
          <span className="material-symbols-outlined block nav-link">home</span>
        </md-text-button>
        <md-text-button class="" title="skills">
          <span className="material-symbols-outlined block nav-link">code</span>
        </md-text-button>
        <md-text-button title="Projects">
          <span className="material-symbols-outlined block nav-link">
            terminal
          </span>
        </md-text-button>
        <md-text-button title="resume">
          <span className="material-symbols-outlined block nav-link">
            description
          </span>
        </md-text-button>
        <md-text-button title="certifications and awards">
          <span className="material-symbols-outlined block nav-link">
            license
          </span>
        </md-text-button>
      </div>

      <div>
        <md-outlined-button onClick={() => toggleTheme()}>
          <span className="material-symbols-outlined block">
            {theme === "light" ? "dark_mode" : "light_mode"}
          </span>
        </md-outlined-button>
      </div>
    </div>
  );
}

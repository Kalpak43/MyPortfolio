"use client";

import React, { useContext, useEffect, useState } from "react";
import "@material/web/button/text-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";
import { ThemeToggler } from "../ThemeToggler";

export default function Sidebar() {

  const links = [
    {
      name: "home",
      icon: "home",
      link: "#",
    },
    {
      name: "skills",
      icon: "code",
      link: "#skills",
    },
    {
      name: "projects",
      icon: "terminal",
      link: "#terminal",
    },
    {
      name: "resume",
      icon: "description",
      link: "#experience",
    },
    {
      name: "certifications and awards",
      icon: "license",
      link: "#certifications",
    },
  ];

  const [activeSection, setActiveSection] = useState("home");

  const handleHash = () => {
    const hash = window.location.hash;
    setActiveSection(hash);
  };

  useEffect(() => {
    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <header className="flex md:hidden items-center py-4 px-4 sticky top-0 bg-[inherit]">
        <button title="menu-toggle" onClick={handleOpen}>
          <span className="material-symbols-outlined block">
            {open ? "menu_open" : "menu"}
          </span>
        </button>
      </header>
      <div
        className={
          "px-4 py-2 w-fit md:w-auto h-[100dvh] flex flex-col justify-between bg-[var(--md-sys-color-surface-container)] fixed md:static top-0 left-0 z-50 md:translate-x-0 transition-all duration-100" +
          (open ? " translate-x-0" : " -translate-x-full")
        }
      >
        <div className="flex flex-col gap-y-4">
          <button title="menu-toggle" className="md:hidden" onClick={handleOpen}>
            <span className="material-symbols-outlined block">
              {open ? "menu_open" : "menu"}
            </span>
          </button>
          {links.map((link) => (
            <md-text-button
              key={link.name}
              class={
                link.link === activeSection ||
                (activeSection === "" && link.name === "home")
                  ? "active"
                  : ""
              }
              href={link.link}
            >
              <span className="material-symbols-outlined block">
                {link.icon} 
              </span>
            </md-text-button>
          ))}
        </div>

        <div>
          {/* <md-outlined-button onClick={() => toggleTheme()}>
            <span className="material-symbols-outlined block">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </md-outlined-button> */}

          <ThemeToggler />
          
        </div>
      </div>
    </>
  );
}

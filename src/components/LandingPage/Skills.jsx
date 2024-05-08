import { skills } from "@/data/constants";
import React from "react";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="p-4 " id="skills">
      <h1 className="">Skills</h1>

      <br />

      <div className="bg-[var(--md-sys-color-surface-container)] p-4 py-8 rounded-3xl">
        <h2>Front-end</h2>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-2">
          <div className="border-4 border-[var(--md-sys-color-primary)] py-4 px-2 rounded-3xl flex flex-col items-center">
            <span className="text-5xl">
              <FaReact className="text-[#61dbfb]" />
            </span>
            ReactJs
          </div>
          <div className="border-4 border-[var(--md-sys-color-primary)] p-4 rounded-3xl flex flex-col items-center">
            <span className="text-5xl">
              <FaReact className="text-[#61dbfb]" />
            </span>
            ReactJs
          </div>
          <div className="border-4 border-[var(--md-sys-color-primary)] p-4 rounded-3xl flex flex-col items-center">
            <span className="text-5xl">
              <FaReact className="text-[#61dbfb]" />
            </span>
            ReactJs
          </div>
          <div className="border-4 border-[var(--md-sys-color-primary)] p-4 rounded-3xl flex flex-col items-center">
            <span className="text-5xl">
              <FaReact className="text-[#61dbfb]" />
            </span>
            ReactJs
          </div>
        </div>
      </div>
    </div>
  );
}

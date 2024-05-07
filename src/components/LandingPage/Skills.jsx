import { skills } from "@/data/constants";
import React from "react";

export default function Skills() {
  return (
    <div className="p-4 " id="skills">
      <h1 className=" text-[var(--md-sys-color-primary)]">Skills</h1>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div className="rounded-3xl bg-[var(--md-sys-color-surface-container)] p-4">
            <h2>{skill.title}</h2>
            <div className="">
              {skill.skills.map((skill) => (
                <div className="w-fit p-1 px-4 rounded-lg bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-primary)] float-left m-2">
                  <h4 className=" font-[600]">{skill[0]}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

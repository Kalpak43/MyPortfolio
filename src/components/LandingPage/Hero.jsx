"use client";

import React from "react";
import "@material/web/button/filled-button.js";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-fit">
      <div className="w-full h-full rounded-3xl place-content-center justify-items-center bg-[var(--md-sys-color-surface-container)] p-4 order-2 md:order-1">
        <h3>Hi, I am</h3>
        <h3 className="text-[var(--md-sys-color-primary)]">Kalpak Goshikwar</h3>
        <br />
        <h2 className="font-[600]">
          I am a{" "}
          <span className="text-[var(--md-sys-color-primary)]">
            Web Developer
          </span>
        </h2>
        <br />
        <p>
          I am a web developer and a student. I am currently pursuing my B.Tech
          in Computer Science and Engineering from VIT, Vellore. I am a full
          stack web developer and I love to work on new projects and learn new
          technologies.
        </p>
        <br />
        {/* <md-filled-button>Download My Resume</md-filled-button> */}
        <a href="https://m3.material.io/get-started" target="_blank" className="py-4 px-6 font-[600] block w-fit rounded-[9999px] focus:rounded-xl transition-all duration-500 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]">
          Download My Resume
        </a>
      </div>
      <div className="w-full h-full rounded-3xl overflow-clip flex order-1 md:order-2">
        <Image
          src={"/assets/images/Kalpak.jpg"}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

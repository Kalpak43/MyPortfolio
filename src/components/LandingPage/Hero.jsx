"use client";

import React from "react";
import "@material/web/button/filled-button.js";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-fit">
      <div className="w-full h-full rounded-3xl place-content-center justify-items-center bg-[var(--md-sys-color-surface-container)] p-4 py-8 order-2 md:order-1 space-y-4">
        <div>
          <h3>Hi, I am</h3>
          <h3 className="text-[var(--md-sys-color-primary)]">
            Kalpak Goshikwar
          </h3>
        </div>
        <h2 className="font-[600]">
          I am a{" "}
          <span className="text-[var(--md-sys-color-primary)]">
            Web Developer
          </span>
        </h2>
        <p>
          I am a web developer and a student. I am currently pursuing my B.Tech
          in Computer Science and Engineering from VIT, Vellore. I am a full
          stack web developer and I love to work on new projects and learn new
          technologies.
        </p>
        <md-filled-button
          class="py-4 px-6 font-[600]"
          href={process.env.RESUME_LINK}
          target="_blank"
        >
          Download My Resume
        </md-filled-button>
      </div>
      <div className="w-full h-full rounded-3xl overflow-clip flex order-1 md:order-2 lg:max-h-[80vh] md:aspect-[4/3] lg:aspect-auto">
        <Image
          src={"/assets/images/Kalpak.jpg"}
          alt="Kalpak Goshikwar"
          width={500}
          height={500}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}

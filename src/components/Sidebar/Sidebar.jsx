"use client";

import React from "react";
import "@material/web/button/text-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";

export default function Sidebar() {
  return (
    <div className="py-4 px-2 h-screen flex flex-col justify-between bg-[var(--md-sys-color-primary-container)]">
      {/* <md-text-button>
        <span className="material-symbols-outlined block">menu</span>
      </md-text-button> */}
      <div className="flex flex-col gap-y-4">
        <md-text-button >
          <span className="material-symbols-outlined block">home</span>
        </md-text-button>
        <md-text-button>
          <span className="material-symbols-outlined block">code</span>
        </md-text-button>
        <md-text-button>
          <span className="material-symbols-outlined block">terminal</span>
        </md-text-button>
        <md-text-button>
          <span className="material-symbols-outlined block">description</span>
        </md-text-button>
        <md-text-button>
          <span className="material-symbols-outlined block">license</span>
        </md-text-button>
      </div>

      <div>
        <md-outlined-button>
          <span className="material-symbols-outlined block">light_mode</span>
        </md-outlined-button>
      </div>
    </div>
  );
}

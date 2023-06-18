"use client";

import FloatInSection from "@/components/common/FloatInSection";
import Image from "next/image";
import React from "react";

const techImages: string[] = [
  "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png",
  "https://blog.marksauerutley.com/static/d0050d0772fd9db5ec35f7b69a66b609/6af66/tslogo.png",
  "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
  "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
  "https://seeklogo.com/images/T/tailwind-css-logo-89E99D7181-seeklogo.com.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
];

const Technologies = () => {
  return (
    <FloatInSection>
      <h2 className="mb-4 text-3xl font-semibold text-center">
        My tech stack includes:
      </h2>
      <ul className="flex flex-wrap items-center gap-12 p-4 justify-evenly bg-system-white">
        {techImages.map((url, idx) => {
          return (
            <li className="" key={`tech-${idx}`}>
              <Image
                src={url}
                alt={`tech-img-${idx}`}
                className="object-fill h-full"
                width={128}
                height={64}
              />
            </li>
          );
        })}
      </ul>
    </FloatInSection>
  );
};

export default Technologies;

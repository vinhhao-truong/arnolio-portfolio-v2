"use client";

import FloatInSection from "@/components/common/FloatInSection";
import Image from "next/image";
import React from "react";

const techImages: string[] = [
  "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
  "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
  "https://cdn.cdnlogo.com/logos/t/75/tailwind-css-wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
];

const Technologies = () => {
  return (
    <FloatInSection>
      <h2 className="text-3xl font-semibold text-center">
        My tech stack includes:
      </h2>
      <ul className="flex flex-wrap items-center gap-8 justify-evenly">
        {techImages.map((url, idx) => {
          return (
            <li className="" key={`tech-${idx}`}>
              <Image
                src={url}
                alt={`tech-img-${idx}`}
                className=""
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

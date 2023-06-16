"use client";

import ReactProps from "@/interfaces/ReactProps";
import React from "react";

interface SectionHeader extends ReactProps {
  header: string;
}
const SectionHeader: React.FC<SectionHeader> = ({ header }) => {
  return (
    <div className="relative h-max">
      <h1 className="py-20 px-2 ml-12 text-4xl align-middle bg-system-white dark:bg-system-navy w-max z-[1] relative">
        {header}
      </h1>
      <div
        className="absolute left-0 top-1/2 w-full h-[2px] bg-system-navy dark:bg-system-white"
        style={{ transform: "translateY(-50%)" }}
      />
    </div>
  );
};

export default SectionHeader;

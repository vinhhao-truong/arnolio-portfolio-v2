"use client";

import experiences from "@/assets/data/experience";
import FloatInSection from "@/components/common/FloatInSection";
import ReactProps from "@/interfaces/ReactProps";
import React from "react";

const TimelineNode: React.FC<ReactProps> = () => {
  return <div className=""></div>;
};

const Experience = () => {
  return (
    <FloatInSection>
      <h1 className="">Experience</h1>
      <ul className="">
        {experiences.map((exp, idx) => {
          return (
            <li className="" key={`exp-${idx}`}>
              <TimelineNode />
            </li>
          );
        })}
      </ul>
    </FloatInSection>
  );
};

export default Experience;

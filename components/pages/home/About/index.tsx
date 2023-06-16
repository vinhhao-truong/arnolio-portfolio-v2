"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import React from "react";
import Experience from "./Experience";
import Profile from "./Profile";

const About = () => {
  return (
    <PageContainer className="bg-system-white dark:bg-system-navy" id="about">
      <SectionHeader header="#about" />
      <div className="flex flex-col gap-24">
        <Profile />
        <Experience />
      </div>
    </PageContainer>
  );
};

export default About;

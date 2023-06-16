"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import React from "react";
import Experiences from "./Experiences";
import Profile from "./Profile";
import Technologies from "./Technologies";

const About = () => {
  return (
    <PageContainer className="bg-system-white dark:bg-system-navy" id="about">
      <SectionHeader header="#about" />
      <div className="flex flex-col gap-24">
        <Profile />
        <Technologies />
        <Experiences />
      </div>
    </PageContainer>
  );
};

export default About;

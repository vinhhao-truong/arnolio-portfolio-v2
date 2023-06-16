"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import React from "react";

const Projects = () => {
  return (
    <PageContainer
      className="bg-system-white dark:bg-system-navy"
      id="projects"
    >
      <SectionHeader header="#projects" />
    </PageContainer>
  );
};

export default Projects;

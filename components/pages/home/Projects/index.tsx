"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import Project from "@/interfaces/Project";
import ReactProps from "@/interfaces/ReactProps";
import { motion } from "framer-motion";
import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Icon as Iconify } from "@iconify/react";

interface ProjectsProps extends ReactProps {
  projects: any;
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const projectsArr: Project[] = Object.values(projects);
  const projectList: Project[] = projectsArr.sort((a, b) => {
    const timeA: Moment = moment(a?.lastUpdate);
    const timeB: Moment = moment(b?.lastUpdate);
    return timeA.diff(timeB) > 0 ? -1 : timeA.diff(timeB) < 0 ? 1 : 0;
  });
  const initialNumber = 6;
  const [showFull, setShowFull] = useState<boolean>(false);

  return (
    <>
      <PageContainer className="relative z-[1]" id="projects">
        <SectionHeader header="#projects" />
        <FloatInSection className="flex flex-col items-center justify-center w-full mb-4">
          <ul className="flex flex-wrap justify-center w-full gap-4 mt-2 mb-4">
            {projectList
              .slice(0, showFull ? projectList.length : initialNumber)
              .map((p, idx) => {
                return <ProjectCard p={p} key={`project-${idx}`} />;
              })}
          </ul>
          {!showFull && (
            <motion.a
              whileHover={{ y: 2 }}
              onClick={() => setShowFull(true)}
              className="flex flex-col items-center underline cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md shadow-system-green dark:shadow-system-blue">
                <Iconify icon="charm:chevrons-down" className="text-xl" />
              </div>
            </motion.a>
          )}
        </FloatInSection>
      </PageContainer>
    </>
  );
};

export default Projects;

"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import Project from "@/interfaces/Project";
import ReactProps from "@/interfaces/ReactProps";
import { motion } from "framer-motion";
import moment, { Moment } from "moment";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { FaGithub as GithubIcon, FaShare as ShareIcon } from "react-icons/fa";
import getUrl from "@/libs/utils/get/getUrl";

interface ProjectsProps extends ReactProps {
  projects: any;
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const projectsArr: Project[] = Object.values(projects);
  const projectsList: Project[] = projectsArr.sort((a, b) => {
    const timeA: Moment = moment(a?.lastUpdate);
    const timeB: Moment = moment(b?.lastUpdate);
    return timeA.diff(timeB) > 0 ? -1 : timeA.diff(timeB) < 0 ? 1 : 0;
  });

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const MotionImage = motion(Image);

  return (
    <PageContainer
      className="bg-system-white dark:bg-system-navy"
      id="projects"
    >
      <SectionHeader header="#projects" />
      <FloatInSection className="flex justify-center w-full">
        <ul className="flex flex-wrap justify-center w-full gap-4 mt-2 mb-4">
          {projectsList.map((p, idx) => {
            const isHovered = idx === hoveredIdx;
            const isDown = p.status === "Down";
            const isEvenIdx = idx % 2 === 0;

            return (
              <motion.li
                whileHover={{
                  borderRadius: 12,
                  scale: 1.02,
                }}
                className={`${styles.ProjectItem} relative overflow-hidden`}
                key={`projects-${idx}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <MotionImage
                  className="absolute object-cover w-full h-4/5 bottom-0 z-[0]"
                  animate={isHovered ? { scale: 1.2 } : {}}
                  src={
                    p.thumbnail ||
                    "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={`${p.name}`}
                  width={420}
                  height={250}
                />
                <h2 className={`${styles.ProjectName}`}>{p.name}</h2>
                <div
                  className={`${styles.ProjectInside} ${
                    isDown ? `${styles.down}` : ""
                  }`}
                >
                  {isDown && (
                    <motion.div
                      initial={{ x: "-50%", y: "-50%" }}
                      animate={isHovered ? { scale: 0 } : { scale: 1 }}
                      className="absolute text-2xl whitespace-nowrap top-1/2 left-1/2 text-system-white dark:text-system-navy"
                    >
                      😔 the site is down 😔
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={
                      isHovered
                        ? {
                            scale: 1,
                            transition: {
                              delay: 0.3,
                            },
                          }
                        : { scale: 0 }
                    }
                    className="flex justify-center gap-4 text-2xl text-system-white dark:text-system-navy"
                  >
                    {p.srcCodeUrl && (
                      <a
                        href={getUrl(p.srcCodeUrl)}
                        target="_blank"
                        className=""
                      >
                        <GithubIcon className={`${styles.Icon}`} />
                      </a>
                    )}
                    {p.demoUrl && (
                      <a href={getUrl(p.demoUrl)} target="_blank" className="">
                        <ShareIcon className={`${styles.Icon}`} />
                      </a>
                    )}
                  </motion.div>

                  {/* LAST UPDATE */}
                  <p className="absolute bottom-0 w-full pr-2 text-sm text-right bg-system-white text-system-navy">
                    Last updated: {moment(p?.lastUpdate).format("DD MMM YY")}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </FloatInSection>
    </PageContainer>
  );
};

export default Projects;

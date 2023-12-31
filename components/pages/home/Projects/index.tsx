"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import Project from "@/interfaces/Project";
import ReactProps from "@/interfaces/ReactProps";
import { motion } from "framer-motion";
import moment, { Moment } from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Projects.module.scss";
import { FaGithub as GithubIcon, FaShare as ShareIcon } from "react-icons/fa";
import getUrl from "@/libs/utils/get/getUrl";
import { TiWarning as WarningIcon } from "react-icons/ti";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { finishLoadingPart, selectLoading } from "@/redux/loadingSlice";

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

  const dispatch = useDispatch();
  const initialNumber = 6;

  const { isAllProjectsLoaded } = useSelector(selectLoading);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [numberImgLoaded, setNumberImgLoaded] = useState<number>(0);
  const [showFull, setShowFull] = useState<boolean>(false);

  const MotionImage = motion(Image);

  useEffect(() => {
    if (numberImgLoaded >= projectsArr.length && !isAllProjectsLoaded) {
      dispatch(finishLoadingPart("isAllProjectsLoaded"));
    }
  }, [numberImgLoaded, isAllProjectsLoaded]);

  return (
    <>
      <PageContainer className="relative z-[1]" id="projects">
        <SectionHeader header="#projects" />
        <FloatInSection className="flex flex-col items-center justify-center w-full mb-4">
          <ul className="flex flex-wrap justify-center w-full gap-4 mt-2 mb-4">
            {projectsList
              .slice(0, showFull ? projectsList.length : initialNumber)
              .map((p, idx) => {
                const isHovered = idx === hoveredIdx;
                const isDown = p.status === "Down";

                return (
                  <motion.li
                    whileHover={{
                      borderRadius: 0,
                      // scale: 1.02,
                    }}
                    className={`${styles.ProjectItem} relative overflow-hidden rounded-lg bg-system-white dark:bg-system-navy`}
                    key={`projects-${idx}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* HEAD */}
                    <div
                      className={`text-xl h-[20%] relative z-[1] flex justify-center gap-1 items-center w-full bg-system-navy dark:bg-system-white select-none border-b-2 border-system-white dark:border-system-navy`}
                    >
                      <h2 className={`font-semibold text-gradient-reverse`}>
                        {p.name}
                      </h2>
                      {isDown && (
                        <>
                          <WarningIcon className="text-yellow-400 outline-none" />
                        </>
                      )}
                    </div>
                    <div className={`${styles.ProjectBody}`}>
                      {/* MASK */}
                      <motion.a
                        href={getUrl(p.demoUrl || "")}
                        target="_blank"
                        style={
                          isHovered
                            ? {
                                background: "rgba(0, 0, 0, 0.4)",
                                backdropFilter: "blur(5px)",
                              }
                            : {
                                backdropFilter: "blur(0px)",
                                background: "transparent",
                              }
                        }
                        // animate={
                        //   isHovered
                        //     ? {
                        //         background: "rgba(0, 0, 0, 0.4)",
                        //         backdropFilter: "blur(5px)",
                        //       }
                        //     : {
                        //         backdropFilter: "blur(0px)",
                        //         background: "transparent",
                        //       }
                        // }
                        className="absolute w-full h-[65%] z-[1] flex items-center justify-center p-4"
                      >
                        <motion.p
                          animate={
                            isHovered
                              ? {
                                  scale: 1,
                                  opacity: 1,
                                  filter: "blur(0px)",
                                  transition: {
                                    duration: 0.4,
                                    ease: "easeIn",
                                  },
                                }
                              : { scale: 0, opacity: 0, filter: "blur(2px)" }
                          }
                          className="text-lg text-center text-system-white"
                        >
                          {p.description}
                        </motion.p>
                      </motion.a>
                      <MotionImage
                        className="relative object-cover w-full h-full"
                        initial={{ scale: 1.25 }}
                        animate={isHovered ? { scale: 1.1 } : { scale: 1.25 }}
                        src={
                          p.thumbnail ||
                          "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        alt={`${p.name}`}
                        width={420}
                        height={250}
                        onLoadingComplete={() => {
                          if (numberImgLoaded < projectsList.length) {
                            console.log("p-loaded", idx);
                            setNumberImgLoaded((prev) => prev + 1);
                          }
                        }}
                        loading="eager"
                      />
                    </div>

                    {/* FOOT */}
                    <div className={`${styles.ProjectFooter}`}>
                      <ul className="flex items-center gap-2 text-xl">
                        {p.srcCodeUrl && (
                          <li>
                            <a
                              href={getUrl(p.srcCodeUrl)}
                              target="_blank"
                              className=""
                            >
                              <GithubIcon className={`${styles.Icon}`} />
                            </a>
                          </li>
                        )}
                        {p.demoUrl && (
                          <li>
                            <a
                              href={getUrl(p.demoUrl)}
                              target="_blank"
                              className=""
                            >
                              <ShareIcon className={`${styles.Icon}`} />
                            </a>
                          </li>
                        )}
                      </ul>
                      <p>
                        Last updated:{" "}
                        {moment(p?.lastUpdate).format("DD MMM YY")}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
          </ul>
          {!showFull && (
            <motion.a
              whileHover={{ y: 2 }}
              onClick={() => setShowFull(true)}
              className="flex flex-col items-center underline cursor-pointer text-system-blue dark:text-system-green"
            >
              Show more
            </motion.a>
          )}
        </FloatInSection>
      </PageContainer>
    </>
  );
};

export default Projects;

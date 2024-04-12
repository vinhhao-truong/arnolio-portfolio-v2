import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";
import { FaGithub as GithubIcon, FaShare as ShareIcon } from "react-icons/fa";
import getUrl from "@/libs/utils/get/getUrl";
import { TiWarning as WarningIcon } from "react-icons/ti";
import Project from "@/interfaces/Project";
import Image from "next/image";
import moment from "moment";
import { Icon as Iconify } from "@iconify/react";
import { Tooltip } from "@mui/material";

const ImageLoading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Iconify
        icon="eos-icons:bubble-loading"
        className={`text-5xl text-system-blue dark:text-system-green`}
      />
    </div>
  );
};

interface ProjectCardProps {
  p: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isDown = p.status === "Down";
  const isBuilding = p.progress === "In Progress";

  const isPinned = p.isPinned;

  const MotionImage = motion(Image);

  console.log(p.name, p.isPinned);

  return (
    <li className="relative">
      {isPinned && (
        <Iconify
          icon="icon-park-outline:star-one"
          className="absolute -top-2.5 -right-2.5 z-[2] text-3xl text-yellow-400"
        />
        // <p>Star</p>
      )}
      <motion.div
        whileHover={{
          borderRadius: 0,
          // scale: 1.02,
        }}
        className={`${styles.ProjectItem} relative overflow-hidden rounded-lg bg-system-white dark:bg-system-navy`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* HEAD */}
        <div
          className={`text-xl h-[20%] relative z-[1] flex justify-center gap-1 items-center w-full bg-system-navy dark:bg-system-white select-none border-b-2 border-system-white dark:border-system-navy`}
        >
          <div className="relative flex items-center justify-center">
            <h2 className={`font-semibold text-gradient-reverse`}>{p.name}</h2>
            {/* {isDown && <WarningIcon className="text-red-600 outline-none" />} */}
            <div className="absolute -top-1 flex items-center gap-0.5 left-[calc(100%+2px)]">
              {isDown && (
                <p className="text-[10px] italic text-red-600 whitespace-nowrap">
                  Unavailable
                </p>
              )}
              {isBuilding && (
                <p className="text-[10px] italic text-yellow-600 whitespace-nowrap">
                  In progress
                </p>
              )}
            </div>
          </div>
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
          <Suspense fallback={<ImageLoading />}>
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
              loading="eager"
            />
          </Suspense>
          {/* <ImageLoading /> */}
        </div>

        {/* FOOT */}
        <div className={`${styles.ProjectFooter}`}>
          <ul className="flex items-center gap-2 text-xl">
            {p.srcCodeUrl && (
              <li>
                <a href={getUrl(p.srcCodeUrl)} target="_blank" className="">
                  <GithubIcon className={`${styles.Icon}`} />
                </a>
              </li>
            )}
            {p.demoUrl && (
              <li>
                <a href={getUrl(p.demoUrl)} target="_blank" className="">
                  <ShareIcon className={`${styles.Icon}`} />
                </a>
              </li>
            )}
            <li
              className={`${
                isDown ? "text-red-600" : isBuilding ? "text-yellow-600" : ""
              } ml-4 flex justify-center items-center gap-1`}
            >
              {isDown && (
                <>
                  <Iconify icon="bxs:error" />
                  <p className="text-sm">Unavailable</p>
                </>
              )}
              {isBuilding && (
                <>
                  <Iconify icon="mdi:pickaxe" />
                  <p className="text-sm">In progress</p>
                </>
              )}
            </li>
          </ul>
          <p>Last updated: {moment(p?.lastUpdate).format("DD MMM YY")}</p>
        </div>
      </motion.div>
    </li>
  );
};

export default ProjectCard;

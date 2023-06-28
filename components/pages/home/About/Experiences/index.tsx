"use client";

import experiences from "@/components/pages/home/About/Experiences/experience";
import FloatInSection from "@/components/common/FloatInSection";
import ReactProps from "@/interfaces/ReactProps";
import React, { useEffect, useRef } from "react";
import moment, { Moment } from "moment";
import styles from "./Experiences.module.scss";
import {
  BsFillCaretRightFill as RightIcon,
  BsFillCalendarWeekFill as CalendarIcon,
} from "react-icons/bs";
import { IoCheckmarkDoneCircleOutline as DoneCircle } from "react-icons/io5";
import { LuArrowUpCircle as UpIconCircle } from "react-icons/lu";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import FloatingTriangle from "./FloatingTriangle";
import { RiArrowUpSFill as UpIcon } from "react-icons/ri";
import FloatingClock from "./FloatingClock";
import Image from "next/image";
import getRandomNum from "@/libs/utils/get/getRandomNum";
import NoSSR from "@/components/common/NoSSR";

interface TimelineNodeProps extends ReactProps {
  isDone: boolean;
  from?: Moment;
  to?: Moment;
}
const TimelineNode: React.FC<TimelineNodeProps> = ({ isDone, from, to }) => {
  const Date: React.FC<{ date?: Moment }> = ({ date }) => {
    return (
      <div className="flex items-center gap-1">
        {date && <CalendarIcon />}
        <p className="text-xl">{date ? date.format("MMM' YYYY") : "~"}</p>
      </div>
    );
  };

  return (
    <div className="flex justify-center gap-8 mb-1">
      <Date date={from} />
      <div
        className={`${
          isDone
            ? "bg-gray-600 dark:bg-gray-400"
            : "bg-system-blue dark:bg-system-green"
        } w-8 h-8 rounded-full z-[1] relative`}
      >
        {to && (
          <RightIcon
            className="absolute top-1/2 left-full"
            style={{ transform: "translateY(-50%)" }}
          />
        )}
        {isDone ? (
          <DoneCircle
            className="absolute text-4xl text-system-white dark:text-system-navy top-1/2 left-1/2"
            style={{ transform: "translate(-50%,-50%)" }}
          />
        ) : (
          <UpIconCircle
            className="absolute text-3xl text-system-white dark:text-system-navy top-1/2 left-1/2"
            style={{ transform: "translate(-50%,-50%)" }}
          />
        )}
      </div>
      <Date date={to} />
    </div>
  );
};

const Experiences = () => {
  const expRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: expRef,
    offset: ["start end", "end end"],
  });
  const scrollPercentage = useTransform(scrollYProgress, (value) => {
    return `${value * 70}%`;
  });
  const scrollDeg = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={expRef} className="relative">
      <FloatInSection className="relative overflow-x-hidden overflow-y-auto">
        {/* CLOUDS */}
        <NoSSR>
          {Array(6)
            .fill("")
            .map((_, idx) => {
              return (
                <Image
                  key={`cloud-${idx}`}
                  src="https://www.seekpng.com/png/full/482-4823332_cloud-white-cloud-vector-png.png"
                  alt="cloud"
                  width={400}
                  height={400}
                  className="absolute dark:hidden"
                  style={{
                    top: `${getRandomNum(0, 90)}%`,
                    left: `${getRandomNum(0, 90)}%`,
                    opacity: `${getRandomNum(30, 50)}%`,
                  }}
                />
              );
            })}
        </NoSSR>

        {/* MAN AND ROCKET */}

        <motion.div
          style={{
            top: scrollPercentage,
            rotateY: 180,
          }}
          className="absolute left-0 lg:left-16 xl:w-[200px] w-[100px] z-[1]"
        >
          <Image
            src="https://hamam.dev/static/media/coding-gif.013e1a558630d6ee2878.gif"
            alt="move"
            width={200}
            height={100}
          />
        </motion.div>

        <motion.div
          style={{ bottom: scrollPercentage }}
          className="absolute right-0 lg:right-16 xl:w-[200px] w-[100px] z-[1]"
        >
          <Image
            src="https://media0.giphy.com/media/uxHMYYw16sPd1x9CcL/giphy.gif?cid=6c09b952l57ryfd644wxpo7i8i2szfcg0x1oi2lu0h8tm379&ep=v1_stickers_related&rid=giphy.gif&ct=s"
            alt="move"
            width={200}
            height={100}
          />
        </motion.div>
        <h2 className="mb-4 text-3xl font-semibold text-center">
          What have I done and still been doing?
        </h2>
        <ul className="relative flex flex-col items-center]">
          {experiences
            .concat({
              position: "Improving",
              organisation: "Self",
            })
            .reverse()
            .map(
              (
                { from, to, position, organisation, desc, orgLogo, orgUrl },
                idx
              ) => {
                const isDone = !!to;
                const switchPos = 0;

                return (
                  <li
                    className={`${
                      isDone
                        ? "text-gray-600 dark:text-gray-400"
                        : "text-system-blue dark:text-system-green"
                    } xl:w-3/5 w-full lg:w-4/5 mx-auto`}
                    key={`exp-${idx}`}
                  >
                    <div className="relative flex flex-col items-center py-16 text-center">
                      {idx === 0 && (
                        <div
                          className="absolute text-5xl bottom-[calc(100%-20px)] left-1/2"
                          style={{ transform: "translateX(-50%)" }}
                        >
                          <UpIcon />
                        </div>
                      )}
                      <div
                        className={`${
                          isDone
                            ? "bg-system-navy/70 dark:bg-system-white/70"
                            : idx === switchPos
                            ? `${styles.DoneBarSwitch}`
                            : "bg-system-blue dark:bg-system-green"
                        } absolute top-0 w-[4px] h-full left-1/2 `}
                        style={{ transform: "translateX(-50%)" }}
                      />
                      <TimelineNode isDone={isDone} from={from} to={to} />
                      <div
                        className={`${
                          isDone
                            ? `bg-system-navy dark:bg-system-white`
                            : `bg-system-blue dark:bg-system-green`
                        } text-system-white dark:text-system-navy relative px-6 py-2 mb-0.5 rounded-full w-max`}
                      >
                        <h3 className="relative">{position}</h3>
                        {!desc && (
                          <h4 className="relative text-sm">@ {organisation}</h4>
                        )}
                      </div>
                      {desc && (
                        <div className="bg-system-white text-system-navy dark:border-2 border dark:border-system-white rounded z-[1] relative lg:max-w-[60%] max-w-[95%] sm:max-w-[80%]">
                          <a
                            href={orgUrl}
                            target="_blank"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-system-navy text-system-white"
                          >
                            {orgLogo && orgUrl && (
                              <Image
                                src={orgLogo}
                                alt="logo"
                                width={32}
                                height={32}
                                className=""
                              />
                            )}
                            <p>@ {organisation}</p>
                          </a>
                          {desc}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </FloatInSection>
    </div>
  );
};

export default Experiences;

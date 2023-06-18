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
import { LuArrowUpCircle as UpIcon } from "react-icons/lu";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import FloatingSymbol from "./FloatingSymbol";

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
    <div className="flex justify-center gap-8">
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
          <UpIcon
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
    return `${value * 50}%`;
  });
  const scrollDeg = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={expRef} className="relative">
      <motion.div
        style={{ top: scrollPercentage, rotate: scrollDeg }}
        className="absolute z-[2] w-[200px]"
      >
        <FloatingSymbol />
      </motion.div>
      <FloatInSection className="relative">
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
            .map(({ from, to, position, organisation, desc }, idx) => {
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
                  <div className="relative py-16 text-center">
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

                    <h3 className="bg-system-white dark:bg-system-navy z-[1] relative pt-2">
                      {position}
                    </h3>
                    <h4 className="bg-system-white dark:bg-system-navy z-[1] relative text-sm pb-2">
                      @ {organisation}
                    </h4>

                    {desc && (
                      <div className="bg-system-white dark:bg-system-white z-[1] relative p-4 border border-system-navy rounded-lg">
                        {desc}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
        </ul>
      </FloatInSection>
    </div>
  );
};

export default Experiences;

"use client";

import Logo from "@/components/common/Logo";
import LogoDark from "@/components/common/Logo/LogoDark";
import LogoLight from "@/components/common/Logo/LogoLight";
import PageContainer from "@/components/layout/PageContainer";
import ReactProps from "@/interfaces/ReactProps";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.scss";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import moment from "moment";

interface Time {
  time: string;
  iconCode: string;
  colorCode?: string;
}
const time: Time[] = [
  {
    time: "morning",
    iconCode: "vaadin:morning",
    colorCode: "text-yellow-400",
  },
  {
    time: "afternoon",
    iconCode: "ic:baseline-cloud",
    colorCode: "text-sky-500",
  },
  {
    time: "evening",
    iconCode: "solar:moon-fog-bold",
    colorCode: "text-yellow-300",
  },
  {
    time: "night",
    iconCode: "material-symbols:nights-stay",
    colorCode: "text-system-navy",
  },
];

const getTime = () => {
  const now = moment();
  const hr = parseInt(now.format("HH"));
  return hr >= 5 && hr < 12
    ? time[0]
    : hr >= 12 && hr < 17
    ? time[1]
    : hr >= 17 && hr < 21
    ? time[2]
    : time[3];
};

const ExploreMore = () => {
  const MotionLink = motion(Link);

  return (
    <MotionLink
      href="/#about"
      scroll={false}
      shallow
      className="flex flex-col items-center justify-center"
      initial={{ rotate: 90 }}
      animate={{
        transition: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeIn",
        },
        y: [15, 10, 0, 15],
      }}
    >
      <p className="text-sm sm:text-base lg:text-xl">Explore</p>
      <Icon
        icon="ant-design:swap-right-outlined"
        className="text-4xl -scale-y-[100%] -mt-3"
      />
    </MotionLink>
  );
};

interface HeroProps extends ReactProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className={`${styles.Hero} relative h-screen`}>
      <PageContainer className="items-center h-full text-system-navy dark:text-system-white">
        <div className="flex flex-col items-center h-full justify-evenly">
          <div className="">
            <div className="flex items-center gap-2 text-sm font-semibold xs:text-lg whitespace-nowrap sm:text-2xl xl:text-4xl">
              Good {getTime().time}{" "}
              <Icon icon={getTime().iconCode} className={getTime().colorCode} />
              , <span className="">welcome to</span>
            </div>

            <Logo className="lg:w-[50vw] md:w-[70vw] w-full" />
          </div>
          <div className="flex flex-col gap-6">
            <motion.h2
              initial={{ x: -180 }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className="font-semibold sm:text-xl lg:text-3xl"
            >
              My name is{" "}
              <span className="text-system-blue dark:text-system-green">
                Arnold Truong
              </span>
              ,
            </motion.h2>
            <motion.h2
              initial={{ x: -120 }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              className="ml-5 font-semibold 2xs:ml-16 xs:ml-24 sm:ml-32 sm:text-xl lg:text-3xl"
            >
              I am a {"<"}
              <u className="">full-stack web developer</u>
              {" />"},
            </motion.h2>
            <motion.h2
              initial={{ x: -40 }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.6,
                },
              }}
              className="ml-10 font-semibold 2xs:ml-32 xs:ml-48 sm:ml-64 sm:text-xl lg:text-3xl"
            >
              ... and this is my portfolio.
            </motion.h2>
          </div>
          <ExploreMore />
        </div>
      </PageContainer>
    </div>
  );
};

export default Hero;

"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import React from "react";
import Experiences from "./Experiences";
import Profile from "./Profile";
import Technologies from "./Technologies";
import { motion } from "framer-motion";
import styles from "./About.module.scss";
import { useSelector } from "react-redux";
import { selectGlobal } from "@/redux/globalSlice";

const About = () => {
  const isDarkMode = useSelector(selectGlobal).mode === "dark";

  return (
    <div className="relative bg-system-white dark:bg-system-navy" id="about">
      <PageContainer className="mb-24">
        <SectionHeader header="#about" />
        <Profile />
      </PageContainer>
      <div
        className={`${
          isDarkMode
            ? `${styles.TechAndExpDark}`
            : "bg-gradient-to-b from-system-white via-[80%] via-system-sky to-system-white"
        } flex flex-col gap-24`}
      >
        <Technologies />
        <Experiences />
      </div>
    </div>
  );
};

export default About;

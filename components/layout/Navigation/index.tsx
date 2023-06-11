"use client";

import LogoDark from "@/components/common/Logo/LogoDark";
import LogoLight from "@/components/common/Logo/LogoLight";
import Link from "next/link";
import React from "react";
import Nav from "@/interfaces/props/Nav";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";

const homeNavList: Nav[] = [
  { title: "About", url: "/#about", isStayed: true },
  { title: "Projects", url: "/#projects", isStayed: true },
  { title: "Contact", url: "/#contact", isStayed: true },
];

const Navigation = () => {
  return (
    <motion.header className="fixed top-0 z-50 flex items-center justify-center w-full shadow-md bg-system-white/50 dark:bg-system-navy/50 backdrop-blur-md">
      <div className="w-[1440px] py-1.5 px-2 lg:px-4 min-[1444px]:px-0 flex items-center justify-between">
        {/* DESKTOP LOGO */}
        <Link
          href="/"
          scroll={false}
          shallow
          className="w-[130px] md:w-[145px]"
        >
          <LogoDark />
          <LogoLight />
        </Link>
        <MenuButton navList={homeNavList} />
      </div>
    </motion.header>
  );
};

export default Navigation;

"use client";

import LogoDark from "@/components/common/Logo/LogoDark";
import LogoLight from "@/components/common/Logo/LogoLight";
import Link from "next/link";
import React from "react";
import Nav from "@/interfaces/props/Nav";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";
import Logo from "@/components/common/Logo";
import Menu from "./Menu";
import Clock from "./Clock";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/redux/globalSlice";
import DarkModeSwitch from "./DarkModeSwitch";

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <>
      <motion.header className="fixed top-0 z-50 flex items-center justify-center w-full shadow-md bg-system-white/50 dark:bg-system-navy/50 backdrop-blur-md">
        <div className="w-[1440px] py-1.5 px-2 lg:px-4 min-[1444px]:px-0 flex items-center justify-between">
          {/* DESKTOP LOGO */}
          <Link href="/" scroll={false} className="w-[130px] md:w-[145px]">
            <Logo />
          </Link>
          <div className="flex items-center gap-1 lg:flex-col">
            <Clock />
            <DarkModeSwitch />
          </div>

          <MenuButton />
        </div>
      </motion.header>
      <Menu />
    </>
  );
};

export default Navigation;

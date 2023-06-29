"use client";

import ReactProps from "@/interfaces/ReactProps";
import { closeMenu, selectNavigation } from "@/redux/navigationSlice";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import styles from "./Menu.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Nav from "@/interfaces/props/Nav";
import Link from "next/link";
import LogoDark from "@/components/common/Logo/LogoDark";
import LogoLight from "@/components/common/Logo/LogoLight";
import Logo from "@/components/common/Logo";

const homeNavList: Nav[] = [
  { title: "about me", url: "/#about", isStayed: true },
  { title: "all my projects", url: "/#projects", isStayed: true },
  { title: "get in touch", url: "/#contact", isStayed: true },
];

interface MenuProps extends ReactProps {}
const Menu: React.FC<MenuProps> = () => {
  const isMenuOpen = useSelector(selectNavigation).isMenuOpen;
  const dispatch = useDispatch();

  const escFn = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch(closeMenu());
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.querySelector("body")?.classList?.add("overflow-hidden");
    } else {
      document.querySelector("body")?.classList?.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      const escape = document.addEventListener("keydown", escFn);

      return () => removeEventListener("keydown", escFn, false);
    }
  }, [isMenuOpen]);

  return (
    <motion.div
      initial={{ display: "none", opacity: 0 }}
      animate={
        isMenuOpen
          ? { opacity: 1, display: "block" }
          : { display: "none", opacity: 0 }
      }
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={`${styles.Menu} fixed z-50 w-screen h-screen bg-system-navy`}
    >
      {/* CLOSE BUTTON */}
      <motion.button
        className={`${styles.CloseButton}`}
        onClick={() => {
          dispatch(closeMenu());
        }}
      >
        <MdOutlineClose className="text-2xl " />
      </motion.button>
      {/* <div className="w-[1440px] py-1.5 px-2 lg:px-4 min-[1444px]:px-0 block mx-auto">
        <Link
          className="flex w-[130px] md:w-[145px]"
          href="/"
          onClick={() => dispatch(closeMenu())}
        >
          <Logo className="w-[130px] md:w-[145px]" />
        </Link>
      </div> */}

      <nav className="flex flex-col items-end justify-center w-full h-full gap-8 pr-2 lg:pr-4 list-none max-w-[1440px]">
        {homeNavList.map(({ title, url, isStayed }, idx) => {
          return (
            <motion.li
              initial={{
                x: 30 * (idx + 1),
              }}
              whileInView={
                isMenuOpen
                  ? {
                      x: 0,
                      transition: {
                        delay: 0.15,
                        ease: "easeIn",
                        duration: 0.3,
                      },
                    }
                  : { x: 30 * (idx + 1) }
              }
              whileHover={{
                scale: 1.1,
              }}
              key={`menu-${idx}`}
              className="text-2xl text-system-white dark:text-system-navy"
            >
              <Link
                href={url}
                scroll={!isStayed}
                onClick={() => {
                  dispatch(closeMenu());
                }}
              >
                {title}
              </Link>
            </motion.li>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default Menu;

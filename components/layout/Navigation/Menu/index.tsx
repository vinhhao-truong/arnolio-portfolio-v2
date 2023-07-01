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
      document.addEventListener("keydown", escFn);

      return () => removeEventListener("keydown", escFn, false);
    }
  }, [isMenuOpen]);

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      animate={
        isMenuOpen
          ? { display: "block" }
          : {
              display: "none",
              transition: {
                delay: 0.4,
              },
            }
      }
      className=""
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isMenuOpen
            ? { opacity: 1 }
            : { opacity: 0, transition: { duration: 0.4 } }
          // { opacity: 1 }
        }
        // transition={{ duration: 1, ease: "easeIn" }}
        className={` bg-gradient-120 from-system-white/50 from-[20%] to-system-navy to-[30%] dark:from-system-navy/50 dark:to-system-white fixed z-50 w-screen h-screen`}
      >
        {/* CLOSE BUTTON */}
        <motion.button
          className={`${styles.CloseButton} text-system-white dark:text-system-navy
        hover:text-system-navy hover:bg-system-white
        hover:dark:text-system-white hover:dark:bg-system-navy
      border-system-white dark:border-system-navy`}
          onClick={() => {
            dispatch(closeMenu());
          }}
        >
          <MdOutlineClose className="text-2xl " />
        </motion.button>
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
    </motion.div>
  );
};

export default Menu;

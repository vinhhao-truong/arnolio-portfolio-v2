"use client";

import Nav from "@/interfaces/props/Nav";
import ReactProps from "@/interfaces/ReactProps";
import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "@/redux/navigationSlice";
import { selectGlobal } from "@/redux/globalSlice";

interface MenuIconProps extends ReactProps {
  isDarkMode: boolean;
  isHovered: boolean;
  hoveredColor: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({
  isDarkMode,
  isHovered,
  hoveredColor,
}) => {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
      <motion.rect
        animate={
          isHovered
            ? { fill: hoveredColor, x: -2 }
            : isDarkMode
            ? { fill: "#F9F9F9" }
            : { fill: "#1F2B37" }
        }
        width="14"
        height="3"
        rx="1.5"
      />
      <motion.rect
        animate={
          isHovered
            ? { fill: hoveredColor, x: -2 }
            : isDarkMode
            ? { fill: "#F9F9F9" }
            : { fill: "#1F2B37" }
        }
        y="5"
        width="14"
        height="3"
        rx="1.5"
      />
      <motion.rect
        animate={
          isHovered
            ? { fill: hoveredColor, x: -2 }
            : isDarkMode
            ? { fill: "#F9F9F9" }
            : { fill: "#1F2B37" }
        }
        y="10"
        width="14"
        height="3"
        rx="1.5"
      />
    </svg>
  );
};

interface MenuButtonProps extends ReactProps {}
const MenuButton: React.FC<MenuButtonProps> = () => {
  const displayMode = useSelector(selectGlobal).mode;
  const isDarkMode = displayMode === "dark";

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const hoveredColor = isDarkMode ? "#77F2A1" : "#4F76F6";

  const dispatch = useDispatch();

  return (
    <motion.button
      whileHover={{ borderColor: hoveredColor, color: hoveredColor }}
      animate={
        isDarkMode
          ? {
              borderColor: "#F9F9F9",
              color: "#F9F9F9",
            }
          : {
              borderColor: "#1F2B37",
              color: "#1F2B37",
            }
      }
      onHoverStart={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
      className={`${styles.MenuButton}`}
      onClick={() => {
        dispatch(openMenu());
      }}
    >
      Navigate
      <MenuIcon
        isDarkMode={isDarkMode}
        isHovered={isHovered}
        hoveredColor={hoveredColor}
      />
    </motion.button>
  );
};

export default MenuButton;

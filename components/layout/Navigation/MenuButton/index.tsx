"use client";

import Nav from "@/interfaces/props/Nav";
import ReactProps from "@/interfaces/ReactProps";
import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { motion } from "framer-motion";
import useGetDarkLightMode from "@/hooks/useGetDarkLightMode";

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
        animate={isHovered ? { fill: hoveredColor, x: -2 } : {}}
        width="14"
        height="3"
        rx="1.5"
        fill={isDarkMode ? "#F9F9F9" : "#1F2B37"}
      />
      <motion.rect
        animate={isHovered ? { fill: hoveredColor, x: -4 } : {}}
        y="5"
        width="14"
        height="3"
        rx="1.5"
        fill={isDarkMode ? "#F9F9F9" : "#1F2B37"}
      />
      <motion.rect
        animate={isHovered ? { fill: hoveredColor, x: -6 } : {}}
        y="10"
        width="14"
        height="3"
        rx="1.5"
        fill={isDarkMode ? "#F9F9F9" : "#1F2B37"}
      />
    </svg>
  );
};

interface MenuButtonProps extends ReactProps {
  navList: Nav[];
}
const MenuButton: React.FC<MenuButtonProps> = () => {
  const displayMode = useGetDarkLightMode();
  const isDarkMode = displayMode === "dark";

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const hoveredColor = isDarkMode ? "#77F2A1" : "#4F76F6";

  return (
    <motion.button
      whileHover={{ borderColor: hoveredColor, color: hoveredColor }}
      onHoverStart={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
      className={`${styles.Menu}`}
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

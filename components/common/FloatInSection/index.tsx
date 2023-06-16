"use client";

import ReactProps from "@/interfaces/ReactProps";
import { getClasses, getStyles } from "@/libs/utils/get/getProps";
import React from "react";
import { motion } from "framer-motion";

const FloatInSection: React.FC<ReactProps> = ({
  children,
  className,
  id,
  style,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      style={getStyles(style)}
      className={getClasses(className)}
      id={getClasses(id)}
    >
      {children}
    </motion.div>
  );
};

export default FloatInSection;

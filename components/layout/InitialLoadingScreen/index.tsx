"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectLoading } from "@/redux/loadingSlice";

const InitialLoadingScreen = () => {
  const loading = useSelector(selectLoading);
  const isLoading = loading.isLoading;

  return (
    <motion.div
      initial={{ opacity: 1, display: "block" }}
      animate={
        isLoading
          ? { opacity: 1, display: "block" }
          : { opacity: 0, display: "none" }
      }
      className="fixed top-0 w-screen h-screen z-[100] bg-system-white dark:bg-system-navy"
    >
      <p className="absolute font-semibold lg:text-7xl bottom-4 right-4">
        counter
      </p>
    </motion.div>
  );
};

export default InitialLoadingScreen;

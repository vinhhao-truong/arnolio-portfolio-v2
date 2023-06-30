"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectLoading } from "@/redux/loadingSlice";
import styles from "./InitialLoadingScreen.module.scss";

const InitialLoadingScreen = () => {
  const loading = useSelector(selectLoading);
  const isLoading = loading.isLoading;

  return (
    <motion.div
      animate={
        !isLoading
          ? {
              display: "none",
              transition: { delay: 1.5 },
            }
          : {}
      }
      className=""
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={
          isLoading
            ? { opacity: 1 }
            : {
                opacity: 0,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              }
        }
        className={`${styles.Background} fixed top-0 w-screen h-screen z-[100]`}
      >
        <p className="absolute font-semibold lg:text-7xl bottom-4 right-4">
          {isLoading ? "counter" : "ok"}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InitialLoadingScreen;

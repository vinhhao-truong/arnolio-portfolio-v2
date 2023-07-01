"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, stopLoading } from "@/redux/loadingSlice";
import styles from "./InitialLoadingScreen.module.scss";

const InitialLoadingScreen = () => {
  const loading = useSelector(selectLoading);
  const isLoading = loading.isLoading;
  const loadingPercentage = loading.loadingPercentage;

  const dispatch = useDispatch();

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (loadingPercentage > counter && counter < 1) {
      const countUp = setInterval(() => {
        setCounter((prev) => {
          return prev + 0.01;
        });
      }, 10);

      return () => clearInterval(countUp);
    }
  }, [loadingPercentage, counter]);

  useEffect(() => {
    if (counter >= 1) {
      dispatch(stopLoading());
    }
  }, [counter]);

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
          {Math.round(counter * 100)}%
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InitialLoadingScreen;

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, stopLoading } from "@/redux/loadingSlice";
import styles from "./InitialLoadingScreen.module.scss";
import { totalLoadingPart } from "@/redux/globalSlice";
import Image from "next/image";

const InitialLoadingScreen = () => {
  const loading = useSelector(selectLoading);
  const isLoading = loading.isLoading;
  const loadingPercentage = loading.loadingPercentage;

  const dispatch = useDispatch();

  const [counter, setCounter] = useState<number>(0);

  const renderedCounter = useMemo(() => {
    return Math.round(counter * 100);
  }, [counter]);

  //counter
  useEffect(() => {
    if (loadingPercentage > counter && counter < 1) {
      const countUp = setInterval(() => {
        setCounter((prev) => {
          return prev + 0.01;
        });
      }, (1 / totalLoadingPart) * 7);

      return () => clearInterval(countUp);
    }
  }, [loadingPercentage, counter]);

  useEffect(() => {
    if (counter >= 1) {
      dispatch(stopLoading());
    }
  }, [counter]);

  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isLoading]);

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
        className={`${styles.Background} flex items-center justify-center fixed top-0 w-screen h-screen z-[100]`}
      >
        <Image
          src="https://media4.giphy.com/media/f9AjRYtpT6H666ysVh/giphy.gif?cid=6c09b952rhytlbu80wvuqx8cf6689lwj0z0bw7vti4k1copb&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          alt=""
          width={500}
          height={500}
          className="max-w-[80vw] select-none"
          unoptimized
        />
        <p className="absolute text-2xl font-semibold lg:text-7xl bottom-4 right-4">
          {renderedCounter}%
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InitialLoadingScreen;

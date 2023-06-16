"use client";

import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Clock.module.scss";

const Clock = () => {
  const [time, setTime] = useState<Moment>(moment());

  useEffect(() => {
    const count = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(count);
  }, []);

  return (
    <p className={`${styles.Clock}`}>
      {time.format("HH")}
      <motion.span
        animate={{
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
          opacity: [1, 0, 0, 1],
        }}
      >
        :
      </motion.span>
      {time.format("mm")}
    </p>
  );
};

export default Clock;

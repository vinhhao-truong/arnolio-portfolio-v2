"use client";

import moment, { Moment } from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Clock.module.scss";

const Clock = () => {
  const [time, setTime] = useState<Moment>(moment());

  const renderedHr = useMemo(() => {
    return time.format("HH");
  }, [time]);

  const renderedMin = useMemo(() => {
    return time.format("mm");
  }, [time]);

  useEffect(() => {
    const count = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(count);
  }, []);

  return (
    <p className={`${styles.Clock}`}>
      {renderedHr}
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
      {renderedMin}
    </p>
  );
};

export default Clock;

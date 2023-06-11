"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";

const useGetDarkLightMode = () => {
  const [mode, setMode] = useState<"dark" | "light">();

  useLayoutEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setMode(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setMode(colorScheme);
      });
  }, []);

  return mode;
};

export default useGetDarkLightMode;

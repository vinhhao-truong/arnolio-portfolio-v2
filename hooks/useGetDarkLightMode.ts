"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";

const useGetDarkLightMode = () => {
  const [mode, setMode] = useState<"dark" | "light">();

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && isDarkMode)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        if (colorScheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        setMode(colorScheme);
      });
  }, []);

  return mode;
};

export default useGetDarkLightMode;

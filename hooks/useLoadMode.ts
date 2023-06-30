"use client";

import { selectGlobal } from "@/redux/globalSlice";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/redux/globalSlice";

const useLoadMode = () => {
  const mode = useSelector(selectGlobal).mode;
  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && isDarkMode)
    ) {
      dispatch(setMode("dark"));
      document.documentElement.classList.add("dark");
    } else {
      dispatch(setMode("light"));
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
        dispatch(setMode(colorScheme));
      });
  }, []);
};

export default useLoadMode;

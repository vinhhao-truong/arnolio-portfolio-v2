"use client";

import useGetDarkLightMode from "@/hooks/useGetDarkLightMode";
import ReactProps from "@/interfaces/ReactProps";
import { loaded } from "@/redux/loadingSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface BgWrapperProps extends ReactProps {
  darkBg: string;
  lightBg: string;
}
const BackgroundWrapper: React.FC<BgWrapperProps> = ({
  children,
  lightBg,
  darkBg,
}) => {
  const currentMode = useGetDarkLightMode();
  const isDarkMode = currentMode === "dark";
  const isLightMode = currentMode === "light";

  const dispatch = useDispatch();

  return !!currentMode ? (
    <div
      style={{
        resize: "both",
        backgroundImage: `url(${
          isDarkMode ? darkBg : isLightMode ? lightBg : ""
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={` bg-no-repeat bg-cover relative`}
      onLoad={() => {
        dispatch(loaded("isBgLoaded"));
      }}
    >
      {children}
    </div>
  ) : (
    <div className="">{children}</div>
  );
};

export default BackgroundWrapper;

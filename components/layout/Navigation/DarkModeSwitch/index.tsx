"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobal, setMode } from "@/redux/globalSlice";
import Switch from "react-switch";
import {
  BsFillMoonFill as MoonIcon,
  BsFillSunFill as SunIcon,
} from "react-icons/bs";

const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectGlobal).mode;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(mode === "dark");

  useEffect(() => {
    setIsDarkMode(mode === "dark");
  }, [mode]);

  const onSwitchChange = (
    isDark: boolean,
    event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    id: string
  ) => {
    if (isDark) {
      dispatch(setMode("dark"));
    } else {
      dispatch(setMode("light"));
    }
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={onSwitchChange}
      height={12}
      width={35}
      handleDiameter={22}
      checkedIcon={<></>}
      checkedHandleIcon={
        <div className="flex items-center justify-center w-full h-full border-2 rounded-full border-system-white">
          <MoonIcon className="text-sm text-system-white" />
        </div>
      }
      uncheckedIcon={<></>}
      uncheckedHandleIcon={
        <div className="flex items-center justify-center w-full h-full border-2 rounded-full border-system-white">
          <SunIcon className="text-yellow-400" />
        </div>
      }
      offColor="#bae6fd"
      onColor="#e5e5e5"
      onHandleColor="#525252"
      offHandleColor="#93c5fd"
      activeBoxShadow="0px 0px 1px 2px #F9F9F9"
    />
  );
};

export default DarkModeSwitch;

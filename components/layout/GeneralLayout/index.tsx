"use client";

import ReactProps from "@/interfaces/ReactProps";
import { loaded, selectLoading, stopLoading } from "@/redux/loadingSlice";
import React, { useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InitialLoadingScreen from "../InitialLoadingScreen";
import { selectGlobal } from "@/redux/globalSlice";
import { setMode } from "@/redux/globalSlice";
import useLoadMode from "@/hooks/useLoadMode";

const GeneralLayout: React.FC<ReactProps> = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const global = useSelector(selectGlobal);
  const mode = global.mode;

  useLoadMode();

  useEffect(() => {
    if (!!mode) {
      dispatch(loaded("isModeLoaded"));
    }
  }, [mode]);

  useEffect(() => {
    if (loading.isModeLoaded) {
      dispatch(stopLoading());
    }
  }, [loading]);

  // useEffect(() => {
  //   if (!loading.isLoading) {
  //     document.querySelector("body")?.classList.add("overflow-auto");
  //   }
  // }, [loading.isLoading]);

  return (
    <>
      {children}
      <InitialLoadingScreen />
    </>
  );
};

export default GeneralLayout;

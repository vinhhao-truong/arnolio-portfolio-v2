"use client";

import ReactProps from "@/interfaces/ReactProps";
import { selectLoading, startLoading } from "@/redux/loadingSlice";
import React, { useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InitialLoadingScreen from "../InitialLoadingScreen";

const GeneralLayout: React.FC<ReactProps> = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  // useEffect(() => {
  //   if (document !== undefined) {
  //     document.querySelector("body")?.classList.add("overflow-hidden");
  //   }
  //   dispatch(startLoading());
  // }, []);

  useEffect(() => {
    if (!loading.isLoading) {
      document.querySelector("body")?.classList.add("overflow-auto");
    }
  }, [loading.isLoading]);

  return (
    <>
      {children}
      {/* <InitialLoadingScreen /> */}
    </>
  );
};

export default GeneralLayout;

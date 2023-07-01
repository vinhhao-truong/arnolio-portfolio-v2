"use client";

import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Loading {
  isLoading: boolean;
  loadingPercentage: number;
  // isBgLoaded: boolean;
  isModeLoaded: boolean;
  isAllProjectsLoaded: boolean;
}
const initialState: Loading = {
  isLoading: true,
  loadingPercentage: 0,
  // isBgLoaded: false,
  isModeLoaded: false,
  isAllProjectsLoaded: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: { ...initialState },
  reducers: {
    stopLoading: (state) => {
      document.querySelector("body")?.classList?.remove("overflow-hidden");
      state.isLoading = false;
    },

    finishLoadingPart: (state, action: PayloadAction<keyof Loading>) => {
      if (
        action.payload !== "loadingPercentage" &&
        state[action.payload] === false
      ) {
        const totalLoading = Object.keys(initialState).length - 2;

        state.loadingPercentage += 1 / totalLoading;
        state[action.payload] = true;
      }
    },
  },
});

export default loadingSlice;
export const selectLoading = (state: RootState) => state.loading;
export const { finishLoadingPart, stopLoading } = loadingSlice.actions;

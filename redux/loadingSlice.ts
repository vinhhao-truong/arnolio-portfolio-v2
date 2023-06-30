"use client";

import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Loading {
  isLoading: boolean;
  isBgLoaded: boolean;
  isModeLoaded: boolean;
}
const initialState: Loading = {
  isLoading: true,
  isBgLoaded: false,
  isModeLoaded: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: { ...initialState },
  reducers: {
    stopLoading: (state) => {
      document.querySelector("body")?.classList?.remove("overflow-hidden");
      state.isLoading = false;
    },
    loaded: (state, action: PayloadAction<keyof Loading>) => {
      state[action.payload] = true;
    },
  },
});

export default loadingSlice;
export const selectLoading = (state: RootState) => state.loading;
export const { loaded, stopLoading } = loadingSlice.actions;

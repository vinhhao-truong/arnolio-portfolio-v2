"use client";

import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Loading {
  isLoading: boolean;
  isBgLoaded: boolean;
}
const initialState: Loading = {
  isLoading: false,
  isBgLoaded: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: { ...initialState },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
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
export const { startLoading, loaded, stopLoading } = loadingSlice.actions;

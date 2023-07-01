"use client";

import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Loading {
  mode: "dark" | "light" | undefined;
}
const initialState: Loading = {
  mode: undefined,
};

const globalSlice = createSlice({
  name: "global",
  initialState: { ...initialState },
  reducers: {
    setMode: (state, action: PayloadAction<"dark" | "light">) => {
      state.mode = action.payload;
      if (action.payload === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export default globalSlice;
export const selectGlobal = (state: RootState) => state.global;
export const { setMode } = globalSlice.actions;

"use client";

import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState: { ...initialState },
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export default navigationSlice;
export const selectNavigation = (state: RootState) => state.navigation;
export const { openMenu, closeMenu } = navigationSlice.actions;

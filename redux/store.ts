"use client";

import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

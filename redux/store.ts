"use client";

import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import navigationSlice from "./navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

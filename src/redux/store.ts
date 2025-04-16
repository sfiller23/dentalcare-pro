import { configureStore } from "@reduxjs/toolkit";

// Example slice (replace with your actual slices)
import patienceReducer from "./patienceSlice";

export const store = configureStore({
  reducer: {
    patience: patienceReducer, // Add your reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

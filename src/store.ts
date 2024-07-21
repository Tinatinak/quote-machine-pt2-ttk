import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quotes/quoteSlice";

export const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

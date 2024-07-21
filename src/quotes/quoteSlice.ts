import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialQuotes } from "./data";

interface QuotesState {
  quotes: Array<any>;
  currentQuote: number;
}

const initialState = {
  quotes: initialQuotes,
  currentQuote: Math.floor(Math.random() * initialQuotes.length),
} as QuotesState;

export const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    switch(state) {
      state.currentQuote = Math.floor(Math.random() * initialQuotes.length);
    },
    next(state, action: PayloadAction<number>) {
      state.currentQuote =
        (state.currentQuote + action.payload) % state.quotes.length;
    },
  },
});
export const quoteActions = quoteSlice.actions;
export default quoteSlice.reducer;

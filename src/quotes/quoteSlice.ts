import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialQuotes, Quote } from "./data";

interface QuotesState {
  quotes: Array<Quote>;
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
      state.currentQuote = Math.floor(Math.random() * state.quotes.length);
    },
    next(state, action: PayloadAction<number>) {
      state.currentQuote =
        (state.currentQuote + action.payload) % state.quotes.length;
    },
    add: {
      reducer: (state, action: PayloadAction<Quote>) => {
        state.quotes.push(action.payload);
      },
      prepare: (author: string, text: string) => {
        return { payload: { author, text } };
      },
    },
    addBatch: {
      reducer: (state, action: PayloadAction<Quote[]>) => {
        state.quotes = [...state.quotes, ...action.payload];
      },
      prepare: (quotes: Quote[]) => {
        return { payload: quotes };
      },
    },
  },
});
export const quoteActions = quoteSlice.actions;
export default quoteSlice.reducer;

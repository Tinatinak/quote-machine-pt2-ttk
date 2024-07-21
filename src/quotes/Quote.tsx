import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { quoteActions } from "./quoteSlice";
import { Box, Button } from "@mui/material";

export default function Quote() {
  const dispatch = useAppDispatch();
  const quotes = useAppSelector((state: RootState) => state.quotes.quotes);
  const currentQuote = useAppSelector(
    (state: RootState) => state.quotes.currentQuote
  );

  const switchQuote = () => {
    dispatch(quoteActions.switch());
  };
  const nextQuote = () => {
    dispatch(quoteActions.next(1));
  };

  return (
    <Box id="quote-box">
      <h1 id="text">
        <span className="quote">“</span>
        {quotes[currentQuote].text}
        <span className="quote">“</span>
      </h1>
      <h2 id="author">– {quotes[currentQuote].author}</h2>
      <Box className="buttons-row">
        <Button variant="contained" onClick={nextQuote}>
          Next
        </Button>
        <Button variant="contained" onClick={switchQuote}>
          Random
        </Button>
      </Box>
    </Box>
  );
}

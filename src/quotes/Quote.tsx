import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { quoteActions } from "./quoteSlice";

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
    <div id="quote-box">
      <h1 id="text">
        <span className="quote">“</span>
        {quotes[currentQuote].text}
        <span className="quote">“</span>
      </h1>
      <h2 id="author">–{quotes[currentQuote].author}</h2>
      <div className="button">
        <button className="btn btn_primary btn_rounded" onClick={switchQuote}>
          Switch
        </button>
      </div>
      <div className="button">
        <button className="btn btn_primary btn_rounded" onClick={nextQuote}>
          Next
        </button>
      </div>
    </div>
  );
}

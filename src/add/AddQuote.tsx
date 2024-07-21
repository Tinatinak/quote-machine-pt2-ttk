import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { quoteActions } from "../quotes/quoteSlice";

export default function AddQuote() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setAuthor("");
    setText("");
  };

  const addQuote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(quoteActions.add(author, text));
    resetForm();
  };

  return (
    <form onSubmit={addQuote}>
      <h2>Add a new quote</h2>
      <label>
        Author
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Text
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </label>

      <div className="button">
        <button className="btn btn_primary btn_rounded" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

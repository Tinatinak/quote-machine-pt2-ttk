import React, { useRef, useState } from "react";
import { Quote } from "../quotes/data";
import { useAppDispatch } from "../hooks";
import { quoteActions } from "../quotes/quoteSlice";

export default function Upload() {
  const inputRef = useRef(null);
  const [progress, setProgress] = useState(-1);
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const dispatch = useAppDispatch();

  const addQuotes = (quotes: Quote[]) => {
    dispatch(quoteActions.addBatch(quotes));
  };

  const handleError = (error: any) => {
    console.error("Could not read file:", error);
    window.alert("Failed to read file!");
  };

  const parse = () => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onerror = (error) => {
      handleError(error);
    };
    fileReader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        addQuotes(json);
        window.alert("Quotes successfully added!");
      } catch (error) {
        handleError(error);
      }
    };
    fileReader.readAsText(file, "UTF-8");
  };

  const onFileSelect = (e: any) => {
    e.target.files && e.target.files.length > 0 && setFile(e.target.files[0]);
  };

  return (
    <div className="upload">
      <h2>Select a file to upload</h2>
      <input ref={inputRef} type="file" onChange={onFileSelect} />
      <div>
        <button className="btn btn_primary btn_rounded" onClick={parse}>
          Upload
        </button>
      </div>
    </div>
  );
}

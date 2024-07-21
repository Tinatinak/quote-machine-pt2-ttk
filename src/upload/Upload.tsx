import React, { useRef, useState } from "react";
import { Quote } from "../quotes/data";
import { useAppDispatch } from "../hooks";
import { quoteActions } from "../quotes/quoteSlice";
import { Box, Button } from "@mui/material";
import ErrorDialog from "../dialogs/ErrorDialog";
import InfoDialog from "../dialogs/InfoDialog";

export default function Upload() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useAppDispatch();

  const addQuotes = (quotes: Quote[]) => {
    dispatch(quoteActions.addBatch(quotes));
  };

  const parse = (file: Blob) => {
    const fileReader = new FileReader();
    fileReader.onerror = (error) => {
      handleError(error);
    };
    fileReader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        addQuotes(json);
        setShowSuccess(true);
      } catch (error) {
        handleError(error);
      }
    };
    fileReader.readAsText(file, "UTF-8");
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      parse(selectedFile);
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleError = (error: any) => {
    console.error("Could not read file:", error);
    setShowError(true);
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Box className="upload">
      <input
        ref={inputRef}
        type="file"
        onChange={onFileSelect}
        className="hidden"
      />
      <Button variant="outlined" onClick={handleButtonClick}>
        Import
      </Button>
      <ErrorDialog
        open={showError}
        onClose={handleCloseError}
        message="Failed to read file!"
      ></ErrorDialog>
      <InfoDialog
        open={showSuccess}
        onClose={handleCloseSuccess}
        message="Quotes successfully added!"
      ></InfoDialog>
    </Box>
  );
}

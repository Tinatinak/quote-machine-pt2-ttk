import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { quoteActions } from "../quotes/quoteSlice";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AddQuote() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setAuthor("");
    setText("");
  };

  const addQuote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(quoteActions.add(author, text));
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleOpen}>
        Add
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new quote</DialogTitle>
        <form onSubmit={addQuote}>
          <DialogContent>
            <TextField
              autoFocus
              label="Author"
              fullWidth
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
            />
            <TextField
              label="Text"
              sx={{ mt: 2 }}
              fullWidth
              multiline
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
            />
          </DialogContent>
          <DialogActions sx={{ mb: 2 }}>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={!author || !text}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

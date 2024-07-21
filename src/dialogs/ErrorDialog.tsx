import Dialog from "@mui/material/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface ErrorDialogProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export default function ErrorDialog(props: ErrorDialogProps) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle sx={{ color: "red" }}>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

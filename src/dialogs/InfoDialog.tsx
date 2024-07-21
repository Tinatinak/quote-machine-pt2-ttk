import Dialog from "@mui/material/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export default function InfoDialog(props: InfoDialogProps) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
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

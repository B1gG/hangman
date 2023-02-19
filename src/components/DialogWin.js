import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { setResetState, setShowWin } from "../store/hangman";
import winnerImage from "../images/congratulations.png";
import { Box } from "@mui/material";

export default function DialogWin() {
  // get the flag from the store
  const showWin = useSelector((state) => state.hangman.showWin);
  // link the dispatch
  const dispatch = useDispatch();

  // to close the dialog
  const handleClose = () => {
    dispatch(setShowWin(false));
    dispatch(setResetState());
  };

  return (
    <Dialog
      open={showWin}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{"Hagman - You Win !!!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description" align="center">
          <Box
            component="img"
            alt="You are a winner"
            src={winnerImage}
            sx={{
              height: "60%",
              width: "60%",
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

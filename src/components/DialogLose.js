import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { setResetState, setShowLose } from "../store/hangman";
import gameOverImage from "../images/gameover.png";
import { Box } from "@mui/material";

export default function DialogLose() {
  // get the flag from the store
  const showWin = useSelector((state) => state.hangman.showLose);
  
  // link the dispatch
  const dispatch = useDispatch();

  // to close the dialog
  const handleClose = () => {
    dispatch(setShowLose(false));
    dispatch(setResetState());
  };

  return (
    <Dialog
      open={showWin}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{"Hagman - You lose!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description" align="center">
          <Box
            component="img"
            alt="You lose this time"
            src={gameOverImage}
            sx={{
              height: "45%",
              width: "45%",
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

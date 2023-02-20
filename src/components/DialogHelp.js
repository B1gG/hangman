import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { setShowHelp } from "../store/hangman";
import { Typography } from "@mui/material";

export default function DialogHelp() {
  // get the flag from the store
  const showHelp = useSelector((state) => state.hangman.showHelp);

  // link the dispatch
  const dispatch = useDispatch();

  // to close the dialog
  const handleClose = () => {
    dispatch(setShowHelp(false));
  };

  return (
    <Dialog
      open={showHelp}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{"Hagman - Game Rules"}</DialogTitle>
      <DialogContent>
        <DialogContentText component="div" id="dialog-description">
          Hangman is a quick and easy game.
          <Typography sx={{mt:1}}><b>Game Rules:</b></Typography>
          <Typography>- Guess one letter at a time to reveal the secret word.</Typography>
          <Typography>- Each incorrect guess adds another part to the hangman.</Typography>
          <Typography>- Too many incorrect guesses result in loss of the game.</Typography>
          <Typography sx={{mt:1}}><b>How to Play:</b></Typography>
          <Typography>- Select the length of the words you want to guess.</Typography>
          <Typography>- Click "Start", and click the letter on the screen to start guessing.</Typography>
          <Typography>- To stop and select a different word length click "Reset".</Typography>
          <Typography>- To show this help click in "Help".</Typography>
          <Typography sx={{mt:2}} >Good luck!!!</Typography>
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

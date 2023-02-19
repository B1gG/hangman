import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setClickedKeys } from "../store/hangman";

// compnent to show the keyboard fo the game
export default function Keyboard() {
  // get the values from the store
  const clickedKeys = useSelector((state) => state.hangman.clickedKeys);
  // we use this to disable the keyboard if the user hasn't started the game.
  const wordLengthSelectorDisabled = useSelector((state) => state.hangman.wordLengthSelectorDisabled);

  // link the dispatch
  const dispatch = useDispatch();

  // keys/labels to the keyboard
  const buttonText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleButtonClick = (letter) => {
    dispatch(setClickedKeys(letter));
  };

  return (
    <Box
      sx={{
        display: "flex",
        direction: "column",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {buttonText.map((letter, index) => (
        <Button
          key={index}
          variant="outlined"
          size="small"
          disabled={(!wordLengthSelectorDisabled || (clickedKeys.indexOf(letter) !== -1))}
          sx={{ m: 1 }}
          onClick={() => handleButtonClick(letter)}
        >
          {letter}
        </Button>
      ))}
    </Box>
  );
}

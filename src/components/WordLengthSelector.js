import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setWordLength } from "../store/hangman";

export default function WordLengthSelector () {
    // get the value from the store
    const wordLength = useSelector((state) => state.hangman.wordLength);

    // used to dissable the word length selection while in game
    const wordLengthSelectorDisabled = useSelector((state) => state.hangman.wordLengthSelectorDisabled);

    // link the dispatch
    const dispatch = useDispatch();
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Word length</InputLabel>
        <Select
          labelId="demo-select-small"
          value={wordLength}
          label="Word length"
          autoWidth
          disabled={wordLengthSelectorDisabled}
          onChange={(e) => dispatch(setWordLength(e.target.value))}
        >
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
        </Select>
      </FormControl>
    );
  };
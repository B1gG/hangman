import { createSlice } from "@reduxjs/toolkit";

// the initial word lenght configuration
const initalWordLenght = 6;

// create the slice
export const hangmanSlice = createSlice({
  name: "hangman",
  initialState: {
    clickedKeys: "",
    wrongKeys: 0,

    word: "",
    wordProgress: "_".repeat(initalWordLenght),
    wordLength: initalWordLenght,
    wordLengthSelectorDisabled: false,

    showHelp: false,
    showWin: false,
    showLose: false,
  },

  reducers: {
    setClickedKeys: (state, action) => {
      // increment the counter wrongKeys
      if (state.word.indexOf(action.payload) === -1){
        state.wrongKeys += 1;
      }
      // check if the user has reach the max attemps
      if (state.wrongKeys === 11) {
        state.showLose = true;
      } else {
        // update the keys
        state.clickedKeys = state.clickedKeys + action.payload;
        // remove the not-discovered letters to update the view
        const regex = new RegExp("([^" + state.clickedKeys + "])", "g");
        state.wordProgress = state.word.replace(regex, "_");
        // check if the user has won
        if ((state.word === state.wordProgress) && (state.wordProgress !== "")) {
          state.showWin = true;
        }
      }
    },
    setWord: (state, action) => {
      state.word = action.payload;
    },
    setWordLength: (state, action) => {
      state.wordLength = Number(action.payload);
      state.wordProgress = "_".repeat(state.wordLength);
    },
    setWordLengthSelectorDisabled: (state, action) => {
      state.wordLengthSelectorDisabled = action.payload;
    },
    setShowHelp: (state, action) => {
      state.showHelp = action.payload;
    },
    setResetState: (state) => {
      state.clickedKeys = "";
      state.wrongKeys = 0;
      state.word = "";
      state.wordProgress = "_".repeat(initalWordLenght);
      state.wordLength = initalWordLenght;
      state.wordLengthSelectorDisabled = false;
    },
    setShowWin: (state, action) => {
      state.showWin = action.payload;
    },
    setShowLose: (state, action) => {
      state.showLose = action.payload;
    },
  },
});

export const {
  setClickedKeys,
  setWord,
  setWordLength,
  setWordLengthSelectorDisabled,
  setShowHelp,
  setResetState,
  setShowWin,
  setShowLose,
} = hangmanSlice.actions;

export default hangmanSlice.reducer;

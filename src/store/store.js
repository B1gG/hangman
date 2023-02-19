import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from "./hangman";

// implement the redux store
export default configureStore({
    reducer: {
        hangman: hangmanReducer
    }
})
// Fonts from Material UI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Material UI components
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import HelpIcon from "@mui/icons-material/Help";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setWord,
  setWordLengthSelectorDisabled,
  setShowHelp,
  setResetState,
} from "./store/hangman";

// components
import DialogHelp from "./components/DialogHelp";
import DialogWin from "./components/DialogWin";
import DialogLose from "./components/DialogLose";
import Keyboard from "./components/Keyboard";
import WordLengthSelector from "./components/WordLengthSelector";
import ImageProgressDisplay from "./components/ImageProgressDisplay";
import WordProgressDisplay from "./components/WordProgressDisplay";

// function to retrieve data
const fetchData = async (url) => {
  // the API Key will need to be revoked later.
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "56e4460580msh63133af25195b09p129ae1jsn81ceebb63ed7",
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    },
  };
  // do the call and manage the await
  const response = await fetch(url, options);
  
  // this API doesn't return a JSON
  const data = await response.text();

  // throw an error if there if not ok
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return data;
};

function App() {
  // get the value from the store
  const wordLength = useSelector((state) => state.hangman.wordLength);
  const wrongKeys = useSelector((state) => state.hangman.wrongKeys);
  // link the dispatch
  const dispatch = useDispatch();

  // to fetch the word of th desired length
  const getWordFromAPI = async (length) => {
    const wordFromAPI = await fetchData(
      `https://random-words5.p.rapidapi.com/getRandom?wordLength=${length}`
    );
    // const wordFromAPI = "Gonzalez";  // delete for final version
    dispatch(setWord(wordFromAPI.trim().toUpperCase()));
  };

  // handler for the onclick for the Start button
  const handleStartClick = () => {
    dispatch(setWordLengthSelectorDisabled(true));
    getWordFromAPI(wordLength);
  };

  return (
    <Container>
      <CssBaseline />
      <Box component={Paper} elevation={6} sx={{ p: 2, mt: 3 }}>
        <Grid container spacing={3} columns={{ xs: 10 }}>
          <Grid item xs={4}>
            <Typography variant="h3">Hangman</Typography>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              direction: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WordLengthSelector />

            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<PlayCircleIcon />}
              onClick={handleStartClick}
              sx={{ m: 1 }}
            >
              Start
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              endIcon={<HelpIcon />}
              onClick={() => dispatch(setShowHelp(true))}
              sx={{ m: 1 }}
            >
              Help
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<RestartAltIcon />}
              onClick={() => dispatch(setResetState(true))}
              sx={{ m: 1 }}
            >
              Reset
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              direction: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageProgressDisplay />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WordProgressDisplay />
            </Box>
            <Keyboard />
          </Grid>

          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="overline">
              Made with <FavoriteIcon fontSize="string" /> by Gerardo Gonzalez
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            {wrongKeys === 0
              ? "Good luck!!!"
              : `Wrong keys pressed: ${wrongKeys}`}
          </Grid>
        </Grid>
      </Box>

      <DialogHelp />
      <DialogWin />
      <DialogLose />
    </Container>
  );
}

export default App;

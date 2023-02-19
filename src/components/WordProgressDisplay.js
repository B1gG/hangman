import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function WordProgressDisplay() {
  // get the value from the store
  const wordProgress = useSelector((state) => state.hangman.wordProgress);
  
  return (
    <Typography color="primary" variant="h3" sx={{ m: 2 }}>
      {/* to display the word we include the spaces */}
      {wordProgress.replace(/([_A-Z])/g, " $1").trim()}
    </Typography>
  );
}

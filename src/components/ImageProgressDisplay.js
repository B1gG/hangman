import imageState0 from "../images/state0.GIF";
import imageState1 from "../images/state1.GIF";
import imageState2 from "../images/state2.GIF";
import imageState3 from "../images/state3.GIF";
import imageState4 from "../images/state4.GIF";
import imageState5 from "../images/state5.GIF";
import imageState6 from "../images/state6.GIF";
import imageState7 from "../images/state7.GIF";
import imageState8 from "../images/state8.GIF";
import imageState9 from "../images/state9.GIF";
import imageState10 from "../images/state10.GIF";
import imageState11 from "../images/state11.GIF";
import { useSelector } from "react-redux";

// object with all the reference to the images 
// is this linked below to the counter of wrongKeys
const images = {
  0:imageState0,
  1:imageState1,
  2:imageState2,
  3:imageState3,
  4:imageState4,
  5:imageState5,
  6:imageState6,
  7:imageState7,
  8:imageState8,
  9:imageState9,
  10:imageState10,
  11:imageState11
}

// component to show the images as the game progresses
const ImageProgressDisplay = () => {
  // get the value from the store
  const wrongKeys = useSelector((state) => state.hangman.wrongKeys);
  return (
    <img alt="" src={images[wrongKeys]} />
  )
}

export default ImageProgressDisplay
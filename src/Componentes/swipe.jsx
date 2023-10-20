import { React, useState } from "react";
import SwipeButton from "react-slide-button";

export function SwipeBtn() {
  const [reset, setReset] = useState(0);
  return (
    <SwipeButton
      mainText="Swipefsgffasgsdfgsfdhag me"
      overlayText="S I K E"
      classList="my-class"
      caretClassList="my-caret-class"
      overlayClassList="my-overlay-class"
      onSwipeDone={() => {
        console.log("Done!");
      }}
      reset={reset}
    />
  );
}

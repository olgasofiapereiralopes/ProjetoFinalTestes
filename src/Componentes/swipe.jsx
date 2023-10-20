import { React, useState } from "react";
import SwipeButton from "react-slide-button";

export function SwipeBtn() {
  const [reset, setReset] = useState(0);
  return (
    <>
      {reset === 0 && (
        <>
          <SwipeButton
            mainText="Swipefsgffasgsdfgsfdhag me"
            overlayText="S I K E"
            classList="my-class"
            caretClassList="my-caret-class"
            overlayClassList="my-overlay-class"
            onSwipeDone={() => {
              setReset((counter) => counter + 1);
            }}
            reset={reset}
          />
          <button
            onClick={() => {
              setReset((counter) => counter + 1);
            }}
          >
            Reset
          </button>
        </>
      )}
      {reset > 0 && (
        <>
          <button
            onClick={() => {
              setReset(0);
            }}
          >
            Reset
          </button>
        </>
      )}
    </>
  );
}

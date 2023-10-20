import React from "react";
import "./App.css";
import { GenericButton } from "./Componentes/genericoButton";
import { MyText } from "./Componentes/Text";
import { TimeSelect } from "./Componentes/setDate";
import { DateRangeCalendarCurrentMonthCalendarPositionProp } from "./Componentes/calendar";
import { SwipeBtn } from "./Componentes/swipe";

function App() {
  return (
    <div>
      <GenericButton
        className="my-button"
        onClick={() => alert("Botão clicado")}
        label="Log"
      />
      <MyText className="my-text" />
      <TimeSelect className="select-time" />
      <DateRangeCalendarCurrentMonthCalendarPositionProp className="calendario" />
      <SwipeBtn className="swipe" />
    </div>
  );
}

export default App;

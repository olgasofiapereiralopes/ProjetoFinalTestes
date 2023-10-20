import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { GenericButton } from "./Componentes/genericoButton";
import { MyText } from "./Componentes/Text";
import { TimeSelect } from "./Componentes/setDate";
import { DateRangeCalendarCurrentMonthCalendarPositionProp } from "./Componentes/calendar";

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
    </div>
  );
}

export default App;

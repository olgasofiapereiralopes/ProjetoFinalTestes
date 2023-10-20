import React, { useState } from "react";
import TimePicker from "react-time-picker";

export function TimeSelect() {
  const [time, setTime] = useState("12:00"); // Define o tempo inicial

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <div>
      <h2>Seletor de Tempo</h2>
      <TimePicker onChange={handleTimeChange} value={time} />
      <p>Tempo selecionado: {time}</p>
    </div>
  );
}

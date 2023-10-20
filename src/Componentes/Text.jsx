import React from "react";

export function MyText(props) {
  return (
    <div className={props.className}>
      {`Olá eu sou um teste`}
      {props.label}
    </div>
  );
}

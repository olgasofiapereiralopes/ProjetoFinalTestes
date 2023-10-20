import React from "react";

export function GenericButton(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {props.label}
    </button>
  );
}

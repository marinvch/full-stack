import React from "react";

export default function Errors(props) {
  return (
    <div className="errors">
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
}

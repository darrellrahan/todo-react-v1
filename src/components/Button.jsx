import React from "react";

const Button = (prop) => (
  <button onClick={prop.onClick}>
    <span>{prop.btnText}</span>
  </button>
);

export default Button;

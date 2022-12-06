import React from "react";

const Item = (prop) => {
  return <li onClick={() => prop.onChecked(prop.id)}>{prop.text}</li>;
};

export default Item;

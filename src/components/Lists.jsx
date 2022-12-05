import React from "react";

const Lists = (prop) => {
  return (
    <div>
      <ul>
        {prop.arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;

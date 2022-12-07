import React, { useState } from "react";

const InputArea = (prop) => {
  const [text, setText] = useState("");

  return (
    <div className="form">
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
        type="text"
        value={text}
      />
      <button
        onClick={() => {
          prop.onClick(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;

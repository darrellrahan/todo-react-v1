import React, { useState } from "react";
import Heading from "./Heading";
import InlineForm from "./InlineForm";
import Lists from "./Lists";

const App = () => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);

  return (
    <div className="container">
      <Heading text="To-Do List" />
      <InlineForm
        type="text"
        onChange={(event) => setText(event.target.value)}
        onClick={() => {
          setLists((prevValue) => [...prevValue, text]);
          setText("");
        }}
        value={text}
        btnText="Add"
      />
      <Lists arr={lists} />
    </div>
  );
};

export default App;

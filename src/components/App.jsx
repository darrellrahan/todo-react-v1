import React, { useState } from "react";
import Item from "./Item";

const App = () => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={(event) => setText(event.target.value)}
          type="text"
          value={text}
        />
        <button
          onClick={() => {
            setLists((prevValue) => [...prevValue, text]);
            setText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {lists.map((list, index) => {
            return (
              <Item
                key={index}
                id={index}
                text={list}
                onChecked={(removeIndex) =>
                  setLists((prevValue) =>
                    prevValue.filter((list, index) => index != removeIndex)
                  )
                }
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;

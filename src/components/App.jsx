import React, { useState } from "react";
import Item from "./Item";
import InputArea from "./InputArea";

const App = () => {
  const [lists, setLists] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onClick={(text) => {
          setLists((prevValue) => [...prevValue, text]);
        }}
      />
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

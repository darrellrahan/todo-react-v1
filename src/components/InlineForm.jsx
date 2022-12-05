import React from "react";
import Button from "./Button";

const InlineForm = (prop) => {
  return (
    <div className="form">
      <input onChange={prop.onChange} type={prop.type} value={prop.value} />
      <Button onClick={prop.onClick} btnText={prop.btnText} />
    </div>
  );
};

export default InlineForm;

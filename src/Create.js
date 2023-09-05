import React, { useState } from "react";

const Create = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");

  // e = event object
  const submitButtonHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput(""); // 按下 submit 後將輸入的欄位改為空值
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={submitButtonHandler}>Submit</button>
    </form>
  );
};

export default Create;

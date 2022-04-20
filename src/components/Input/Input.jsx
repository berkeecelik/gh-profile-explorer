import React from "react";
import "./Input.css";

function Input(props) {
  const userName = props.userName;
  const setUserName = props.setUserName;

  return (
    <input
      type="text"
      required
      className="name-input"
      placeholder="Type username"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    ></input>
  );
}

export default Input;

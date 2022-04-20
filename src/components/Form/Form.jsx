import React, { useState } from "react";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

function Form() {
  const [userValue, setUserValue] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/user/${userValue}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input userName={userValue} setUserName={setUserValue} />
    </form>
  );
}

export default Form;

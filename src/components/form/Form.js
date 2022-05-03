import React, { useState } from "react";
import "./Form.css";
export default function Form(props) {
  const [userInput, setUserInput] = useState("");
  function getInput(e) {
    setUserInput(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    props.onSaveForm(userInput);
    setUserInput("");
  }

  const top100Films = ["oi", "ok", "ta", "sim"];
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          className="city_search"
          placeholder="Procure por uma cidade"
          onChange={getInput}
          value={userInput}
        />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

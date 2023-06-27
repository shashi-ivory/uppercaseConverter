import React, { useState } from "react";

function TextFrom(props) {
  const [text, setText] = useState("Enter Text here!");
  const newText = text.toLocaleUpperCase();
  //change the text into upper case
  const handleClick = () => {
    console.log("you Click button" + newText);
    setText(newText);
  };

  //sewt the onchange text
  const handleOnchangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Change the Text into UpperCase
        </label>
        <textarea
          className="form-control"
          rows="8"
          value={text}
          id="myBox"
          onChange={handleOnchangeText}
        ></textarea>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Convert the Text into upper
        </button>
      </div>
    </>
  );
}

export default TextFrom;

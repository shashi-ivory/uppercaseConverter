import React, { useState } from "react";

function TextFrom(props) {
  const [text, setText] = useState("");
  const newText = text.toLocaleUpperCase();
  const lowerText = text.toLocaleLowerCase();
  //change the text into upper case
  const handleClick = () => {
    console.log("you Click button" + newText);
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("you Click button" + lowerText);
    setText(lowerText);
  };

  //sewt the onchange text
  const handleOnchangeText = (e) => {
    setText(e.target.value);
  };
  const handleClearText = () => {
    setText("");
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
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleClick}
        >
          Convert the Text into Upper Case
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleLoClick}
        >
          Convert the Text into Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleClearText}
        >
          Clear
        </button>
      </div>
      <div className="container my-2">
        <h2>Your text Summery</h2>
        <p>
          Word {text.split(" ").length} ,Character : {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minute to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextFrom;

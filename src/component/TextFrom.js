import React, { useState } from "react";

function TextFrom({ heading, mode, handleAlert }) {
  console.log("props", heading);
  console.log("Textfrommode", mode);
  const [text, setText] = useState("");
  const newText = text.toLocaleUpperCase();
  const lowerText = text.toLocaleLowerCase();

  //change the text into upper case
  const handleClick = () => {
    console.log("you Click button" + newText);
    setText(newText);
    handleAlert("Convert to upperCase ", "success");
  };
  const handleLoClick = () => {
    console.log("you Click button" + lowerText);
    setText(lowerText);
    handleAlert("converted to lowercase", "success");
  };

  //sewt the onchange text
  const handleOnchangeText = (e) => {
    setText(e.target.value);
  };
  const handleClearText = () => {
    setText("");
    handleAlert("Clear Text ", "success");
  };
  const handleCopy = () => {
    console.log("copy ", text);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log("copy value ", text.value);
    handleAlert("Copy Text", "success");
  };

  return (
    <div className="container">
      <h1 style={{ color: mode == "dark" ? "white" : "black" }}>{heading}</h1>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
          style={{ color: mode == "dark" ? "white" : "black" }}
        >
          {/* {heading} */}
        </label>
        <textarea
          className="form-control"
          rows="8"
          value={text}
          id="myBox"
          onChange={handleOnchangeText}
          style={{
            backgroundColor: mode == "dark" ? "#212a50" : "white ",
            color: mode == "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary me-2"
          onClick={handleClick}
        >
          Convert the Text into Upper Case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary me-2"
          onClick={handleLoClick}
        >
          Convert the Text into Lower Case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary me-2"
          onClick={handleClearText}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary me-2"
          onClick={handleCopy}
        >
          Copy text
        </button>
      </div>
      <div className="container my-2">
        <h2 style={{ color: mode == "dark" ? "white" : "black" }}>
          Your text Summery
        </h2>
        <p style={{ color: mode == "dark" ? "white" : "black" }}>
          Word
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }
          ,Character : {text.length}
        </p>
        <p style={{ color: mode == "dark" ? "white" : "black" }}>
          {0.008 * text.split(" ").length} Minute to Read
        </p>
        <h3 style={{ color: mode == "dark" ? "white" : "black" }}>Preview</h3>
        <p style={{ color: mode === "dark" ? "white" : "black" }}>
          {text.length > 0 ? text : "Enter Some thing to preview it:"}
        </p>
      </div>
    </div>
  );
}

export default TextFrom;

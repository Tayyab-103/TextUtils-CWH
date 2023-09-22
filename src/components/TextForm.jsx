import React, { useState } from "react";

export default function TextForm(props) {
  //First Letter capitalize functions
  const capitalize = (word) => {
    // const lower = word.toLowerCase(); 
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleSchClick = () => {
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, " ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Chnage");
    // setText(event.target.value);
     const newText = event.target.value;
     const capitalizedText = newText
       .split(". ")
       .map((sentence) => capitalize(sentence))
       .join(". ");
     setText(capitalizedText);
  };
  // text = "new tex"; // wrong way to change the state
  // setText("new Text"); // correct way to change the state

  const handleCopy = () => {
    // when navigator so below commented are not used
    // {// let text = document.getElementById("myBox");
    // // document.getSelection().removeAllRanges();}

    // text.select();
    navigator.clipboard.writeText(text);
    // removed selected copy text
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSchClick}
        >
          Remove Special Character
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary </h2>
        {/* <p>3432 words and 4532324 characters</p> */}
        <p>
          {/* fixing issue for stating extra space  using filter function */}
          <b>
            {" "}
            {
              //  / \s+ / this means count extra spaces and + means more then one
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length} </b>
          characters
        </p>
        <p>
          {" "}
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          </b>{" "}
          Minutes Read
        </p>
        <h2>preview</h2>
        <p>{capitalize(text.length > 0 ? text : "Nothing to preview!")}</p>
      </div>
    </>
  );
}

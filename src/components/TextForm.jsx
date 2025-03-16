import React, { useState } from "react";
import axios from "axios"; 

export default function TextForm(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleSchClick = () => {
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, " ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    const capitalizedText = newText
      .split(". ")
      .map((sentence) => capitalize(sentence))
      .join(". ");
    setText(capitalizedText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // 🔑 Step 1: Translate Handler
  const handleTranslateClick = async () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to translate", "warning");
      return;
    }
  
    try {
      const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "auto",
          target: "ur",
          format: "text",
          alternatives: 3,
          api_key: "<Your-API-Key>"  // If required
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      // Check if the response is successful
      if (!res.ok) {
        throw new Error("Translation failed");
      }
  
      const data = await res.json();
      
      // Update the text with the translated text
      setText(data.translatedText);
      props.showAlert("Translated to Urdu!", "success");
    } catch (error) {
      console.error("Translation error:", error);
      props.showAlert("Translation failed!", "danger");
    }
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
          onClick={handleSchClick}
        >
          Remove Special Character
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
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
          onClick={handleCopy}
        >
          Copy Text
        </button>

        {/* 🔑 Step 2: Translate Button */}
        {/* <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleTranslateClick}
        >
          Translate into Urdu
        </button> */}
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary </h2>
        <p>
          <b>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => element.length !== 0).length}{" "}
          </b>
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{capitalize(text.length > 0 ? text : "Nothing to preview!")}</p>
      </div>
    </>
  );
}

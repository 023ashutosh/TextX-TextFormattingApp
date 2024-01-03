import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (e) => {
    settext(e.target.value);
  };

  const toUpper = () => {
    let UpperText = text.toUpperCase();
    settext(UpperText);
    props.showAlert("Converted to Upper Case!", "success");
  };

  const toLower = () => {
    let LowerText = text.toLowerCase();
    settext(LowerText);
    props.showAlert("Converted to Lower Case!", "success");
  };

  const toCapitalase = () => {
    let CapitalText = text.replace(/(^\w|\.\s*\w)/g, (match) =>
      match.toUpperCase()
    );
    settext(CapitalText);
    props.showAlert("Converted first letter to Upper Case!", "success");
  };

  const toClear = () => {
    let ClearText = "";
    settext(ClearText);
    props.showAlert("Cleared text area!", "success");
  };

  const handleCopy = () => {
    let copyText = document.getElementById("myBox");
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied text!", "success");
  };

  const [text, settext] = useState("Enter text here");
  return (
    <>
      <div className="container my-3">
        <div
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
          className="container"
        >
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : " black",
                color: props.mode === "light" ? "black" : "white",
              }}
              className="form-control"
              value={text}
              id="myBox"
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
          <button
            className={`btn btn-${
              props.mode === "light" ? "success" : "warning"
            } mx-1 my-1`}
            onClick={toUpper}
          >
            Upper Case
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "success" : "warning"
            } mx-1 my-1`}
            onClick={toLower}
          >
            Lower Case
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "success" : "warning"
            } mx-1 my-1`}
            onClick={toCapitalase}
          >
            Capital Case
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "success" : "warning"
            } mx-1 my-1`}
            onClick={toClear}
          >
            Clear
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "success" : "warning"
            } mx-1 my-1`}
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div
          className="container my-4"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h3>Your text summary</h3>
          <p>
            <b>
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </b>{" "}
            words, <b>{text.length}</b> characters
          </p>
          <p>
            <b>
              {
                text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length * 0.008}
            </b>{" "}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter some text"}</p>
        </div>
      </div>
    </>
  );
}

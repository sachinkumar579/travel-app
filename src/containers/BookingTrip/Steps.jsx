import React from "react";
import "./Steps.css";

function Steps({ color }) {
  return (
    <div className="steps">
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "10px",
          marginRight: "10px",
        }}
      ></div>
      <div>
        <div className="title">Choose Destination</div>
        <span>
          Some text here some text here Some text here
          <br />
          some text here some text here some text here
        </span>
      </div>
    </div>
  );
}

export default Steps;

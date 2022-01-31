import React from "react";
import "./Place.css";

function Place({ name, price }) {
  return (
    <div className="place">
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}

export default Place;

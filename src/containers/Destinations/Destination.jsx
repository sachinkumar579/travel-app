import React from "react";
import "./Destination.css";
import Place from "./Place";
import arrow from "../../assets/arrow.png";

function Destination({ img, name, price, tripDays }) {
  return (
    <div className="destination">
      <img src={img} className="travel-image"></img>
      <Place name={name} price={price}></Place>
      <div className="trip-days">
        <img src={arrow} />
        <span>{tripDays} Days Trip</span>
      </div>
    </div>
  );
}

export default Destination;

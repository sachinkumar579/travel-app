import React from "react";
import Destination from "./Destination.jsx";
import "./Destinations.css";
import rome from "../../assets/rome.jpg";
import london from "../../assets/london.jpg";
import europe from "../../assets/europe.jpg";

function Destinations() {
  return (
    <div className="destinations">
      <h4>Top Selling</h4>
      <h2>Top Destinations</h2>
      <div className="groups">
        <Destination
          img={rome}
          name="Rome,Italy"
          price="$5,42k"
          tripDays="10"
        ></Destination>
        <Destination
          img={london}
          name="London,UK"
          price="$4.2k"
          tripDays="12"
        ></Destination>
        <Destination
          img={europe}
          name="Full Europe"
          price="$15k"
          tripDays="28"
        ></Destination>
      </div>
    </div>
  );
}

export default Destinations;

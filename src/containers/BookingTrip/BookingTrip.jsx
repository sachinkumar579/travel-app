import React from "react";
import "./BookingTrip.css";
import someImage from "../../assets/some-image.jpg";
import Steps from "./Steps";
import tripIcon from "../../assets/trip-icon.png";
import building from "../../assets/building.png";
import heart from "../../assets/heart.png";

function BookingTrip() {
  return (
    <div className="booking-trip">
      <section>
        <div>Easy and Fast</div>
        <div className="heading">
          Book Your Next Trip <br /> In 3 Easy Trips
        </div>
        <div className="booking-steps">
          <Steps color="yellow"></Steps>
          <Steps color="red"></Steps>
          <Steps color="blue"></Steps>
        </div>
      </section>
      <aside>
        <div className="trip-details">
          <div>
            <img src={someImage} className="cover-image"></img>
          </div>
          <div className="title">Trip To Greece</div>
          <small>14-29 June | by Robbin </small>
          <div className="icons">
            <img src={tripIcon} />
            <img src={tripIcon} />
            <img src={tripIcon} />
          </div>
          <div className="people-count">
            <div>
              <img src={building} /> <small>24 people going</small>{" "}
            </div>
            <div>
              <img src={heart} />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default BookingTrip;

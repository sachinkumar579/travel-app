import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="heading">
        Subscribe to get information ,latest news and other interesting offers
        about Cobham
      </div>
      <div className="subscribe-option">
        <div className="subscriber-id">
          <i className="fa fa-envelope icon"></i>
          <input type="text" placeholder="Your email" />
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;

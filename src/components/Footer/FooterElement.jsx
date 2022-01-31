import React from "react";
import "./FooterElement.css";

function FooterElement({ data }) {
  return (
    <div className="footer-element">
      <div className="heading">{data.heading}</div>
      {data.values.map((data, index) => (
        <div key={index} className="items">
          <a href="#">{data}</a>
        </div>
      ))}
    </div>
  );
}

export default FooterElement;

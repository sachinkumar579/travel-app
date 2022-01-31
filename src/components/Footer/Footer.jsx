import React from "react";
import "./Footer.css";
import FooterElement from "./FooterElement";
import SocialMediaIcons from "./SocialMediaIcons";
import FooterHeading from "./FooterHeading";
import footerElements from "./FooterElementsData.json";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <FooterHeading></FooterHeading>
        <FooterElement data={footerElements.data[0]}></FooterElement>
        <FooterElement data={footerElements.data[1]}></FooterElement>
        <FooterElement data={footerElements.data[2]}></FooterElement>
        <SocialMediaIcons></SocialMediaIcons>
      </div>
      <div className="copyright">All rights reserved@jadoo.co</div>
    </footer>
  );
}

export default Footer;

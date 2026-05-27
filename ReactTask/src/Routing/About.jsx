import React from "react";
import AboutImage from "../assets/aboutImg.jpg";

function About() {
  return (
    <div className="aboutContainer RoutingContainer">
      <div className="aboutContent">
        <h6 className="subtitle">About Company</h6>
        <img src={AboutImage} alt="AboutImage" />
      </div>
      <div className="aboutRightContent">
        <p>
          Stackly is a powerful platform that streamlines workflow, enhances
          efficiency, and drives digital success. It offers a user-friendly
          experience with seamless integration, making it an essential tool for
          businesses and individuals looking to optimize their online
          operations. <br />
          <br />
          Founded in 2015, Stackly has grown into one of the leading and most
          innovative IT companies in the industry. With a team of over 120
          talented professionals, we specialize in delivering cutting-edge
          technology solutions that drive business success. Our commitment to
          innovation, excellence, and customer satisfaction has positioned us as
          a trusted partner for businesses seeking to leverage technology for
          growth and efficiency.
        </p>
      </div>
    </div>
  );
}

export default About;

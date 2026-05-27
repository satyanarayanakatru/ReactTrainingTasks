import React from "react";
import Banner from "../assets/banner-thumb-bg.png";

function Home() {
  return (
    <div className="homeContainer RoutingContainer">
      <div className="homeContent">
        <h2>"Empowering businesses with cutting-edge solutions."</h2>
        <p>
          We are a forward-thinking IT company specializing in innovative
          technology solutions that drive business transformation. From software
          development to IT consulting, we deliver tailored services to enhance
          efficiency, streamline processes, and foster growth for businesses of
          all sizes.
        </p>
        <h5>Solutions that power success.</h5>
      </div>
      <div className="image">
        <img src={Banner} alt="banner" />
      </div>
    </div>
  );
}

export default Home;

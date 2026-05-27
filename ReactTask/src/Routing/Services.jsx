import React from "react";
import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="RoutingContainer">
      <h1 style={{ marginBottom: "5px" }}>Services</h1>
      <div>
        <h5 className="subtitle">Our Specialize</h5>
        <h1>What We Offer</h1>
        <div className="cardContent">
          <Link to={"webdevelopment"}>
            <div className="card">
              <h2>Web Application Development</h2>
              <p>
                Web apps are responsive websites that function like mobile apps
                but are accessed via browsers.
              </p>
            </div>
          </Link>
          <Link to={"uiuxdesign"}>
            <div className="card">
              <h2>UI/UX Design</h2>
              <p>
                UI/UX Design branding design focuses on creating a cohesive
                brand identity.
              </p>
            </div>
          </Link>
          <Link to={"appdevelopment"}>
            <div className="card">
              <h2>Mobile Application Developments</h2>
              <p>
                Mobile app development involves a combination of programming,
                design, and testing to create apps.
              </p>
            </div>
          </Link>
          <Link to={"digitalmarketing"}>
            <div className="card">
              <h2>Digital Marketing</h2>
              <p>
                Digital Marketing is the process of creating innovative
                solutions that meet user needs.
              </p>
            </div>
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Services;

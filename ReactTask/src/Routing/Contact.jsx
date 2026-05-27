import React from "react";

function Contact() {
  return (
    <div className="RoutingContainer">
      <h1 className="mainHeading">Contact Us.</h1>

      <h2 className="subHeading">
        Let's make your <br /> brand brilliant!
      </h2>
      <p>
        If you would like to work with us or just want to get in touch, we’d
        love to hear from you!
      </p>
      <div className="address">
        <h3>Headquarters</h3>
        <p>
          MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, Salem,
          Tamil Nadu 636008
        </p>
      </div>
      <div className="address">
        <h3>Email</h3>
        <p>
          info@thestackly.com
          <br />
          thestackly@gmail.com
        </p>
      </div>
      <div className="address">
        <h3>Whatsapp</h3>
        <p>+917010792745</p>
      </div>
    </div>
  );
}

export default Contact;

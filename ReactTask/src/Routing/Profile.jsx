import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="RoutingContainer">
      <div className="profile">
        <h2>Social Media</h2>
        <Link
          to={
            "https://www.facebook.com/people/Stackly-Stackly/pfbid02Nqr4EN7oYruoUySuCfPXg17z9R716yH7tfGJbj2iSzcaQM1nSMiRRw3PuZ3LBuzcl/?rdid=CttLr9qZtzgztSSU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BrqaZkJRe%2F"
          }
        >
          Facebook
        </Link>
        <Link to={"https://x.com/The_Stackly"}>Twitter</Link>
        <Link to={"https://www.linkedin.com/company/the-stackly/"}>
          LinkedIn
        </Link>
        <Link to={"https://www.instagram.com/thestackly"}>Instagram</Link>
      </div>

      <div className="profile">
        <h2>Contact Us</h2>
        <p>info@thestackly.com</p>
        <p>+917010792745</p>
      </div>
    </div>
  );
}

export default Profile;

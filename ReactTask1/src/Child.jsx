import React from "react";
import "./Child.css";

function Child({ name, age, city, role, mobile }) {
  return (
    <div className="childContent">
      <ul>
        <li>
          <b>Name:</b>
          {name}
        </li>
        <li>
          <b>Age:</b>
          {age}
        </li>
        <li>
          <b>City:</b>
          {city}
        </li>
        <li>
          <b>Role:</b>
          {role}
        </li>
        <li>
          <b>Mobile:</b>
          {mobile}
        </li>
      </ul>
    </div>
  );
}

export default Child;

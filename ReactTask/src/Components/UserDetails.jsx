import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.css";

function UserDetailsComponent() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="details-container">
      <h1 className="main-heading">User Details Component</h1>

      <div className="UserDetailscard">
        <h2 className="card-heading">User Details</h2>

        <div className="detail-item">
          <strong>User Id:</strong> {user.id}
        </div>

        <div className="detail-item">
          <strong>Name:</strong> {user.name}
        </div>

        <div className="detail-item">
          <strong>Email:</strong> {user.email}
        </div>

        <div className="detail-item">
          <strong>Phone:</strong> {user.phone}
        </div>

        <div className="detail-item">
          <strong>Username:</strong> {user.username}
        </div>

        <div className="detail-item">
          <strong>Website:</strong> {user.website}
        </div>

        <div className="detail-item">
          <strong>Company:</strong> {user.company?.name}
        </div>

        <div className="detail-item">
          <strong>City:</strong> {user.address?.city}
        </div>
      </div>
    </div>
  );
}

export default UserDetailsComponent;

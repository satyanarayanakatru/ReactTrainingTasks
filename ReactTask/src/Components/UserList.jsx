import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserList.css";

function UserListComponent() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/users/${id}`);
  };
  return (
    <div className="listContainer">
      <h1>Task 11 – useParams Hook with API Integration</h1>
      {user.map((person) => (
        <li
          key={person.id}
          onClick={() => handleNavigate(person.id)}
          style={{ cursor: "pointer" }}
        >
          {person.name}
        </li>
      ))}
    </div>
  );
}

export default UserListComponent;

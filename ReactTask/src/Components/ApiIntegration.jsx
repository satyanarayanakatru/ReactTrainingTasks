import React from "react";
import useFetchData from "./useFetchData";
import "./ApiIntegration.css";

function ApiIntegration() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) return <h1 className="loading">Loading...</h1>;
  if (error) return <h2 className="error">{error}</h2>;

  return (
    <div className="container">
      <h1>Task 14 – API Integration using Custom Hook For Users API</h1>

      <h2>Users List</h2>

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiIntegration;

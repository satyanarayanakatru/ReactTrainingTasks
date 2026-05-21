import React, { useEffect, useState } from "react";
import "./FetchDataApi.css";

function FetchDataApi() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    }, 1000);
  }, []);

  if (loading) {
    return <h2 className="message">Loading the data...</h2>;
  }

  if (error) {
    return <h2 className="message error">{error}</h2>;
  }

  return (
    <div className="container">
      <h1 className="title">Task 6 – Fetch Data from API</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {users.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchDataApi;

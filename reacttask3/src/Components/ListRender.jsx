import React from "react";
import "./ListRender.css";

function ListRender() {
  const API = "https://jsonplaceholder.typicode.com/users";

  fetch(API)
    .then((data) => data.json())
    .then((res) => {
      const tbody = document.querySelector(".tbody");

      res.map((user) => {
        tbody.innerHTML += `
            <tr>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.phone}</td>
              <td>${user.address.city}</td>
            </tr>
          `;
      });
    });

  return (
    <div className="table-card">
      <h1>Users List</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody className="tbody"></tbody>
      </table>
    </div>
  );
}

export default ListRender;

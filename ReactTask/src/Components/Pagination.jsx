import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Pagination.css";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const users = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@mail.com`,
    role: i % 2 === 0 ? "Developer" : "Tester",
    location: i % 2 === 0 ? "Hyderabad" : "Chennai",
  }));

  const currentPage = Number(searchParams.get("page")) || 1;
  const usersPerPage = 5;

  const firstUserPosition = (currentPage - 1) * usersPerPage;
  const lastUserPosition = firstUserPosition + usersPerPage;
  const usersForCurrentPage = users.slice(firstUserPosition, lastUserPosition);

  const numberOfPages = Math.ceil(users.length / usersPerPage);

  const handleNext = () => {
    if (currentPage < numberOfPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  return (
    <div className="pagination-container">
      <h1>Task 13 – Pagination using useSearchParams</h1>
      <h2>User List</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {usersForCurrentPage.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>

        <div className="page-numbers">
          {Array.from({ length: numberOfPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setSearchParams({ page: i + 1 })}
              className={currentPage === i + 1 ? "active-page" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button onClick={handleNext} disabled={currentPage === numberOfPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

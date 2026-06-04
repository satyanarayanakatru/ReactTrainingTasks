import React, { useEffect, useState } from "react";
import "./Crud.css";

function Crud() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const postData = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (trimmedName && trimmedEmail) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "Content-Type": "application/json; charset: UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const maxId = Math.max(...user.map((person) => person.id));
          const newUser = {
            name: trimmedName,
            email: trimmedEmail,
            id: maxId + 1,
          };
          setUser((prevUsers) => [...prevUsers, newUser]);
          setName("");
          setEmail("");
        });
    }
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((prevUsers) => {
          return prevUsers.filter((person) => person.id !== id);
        });
      });
  };

  const updateUser = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (trimmedName && trimmedEmail) {
      fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
        method: "PUT",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser((prevUsers) =>
            prevUsers.map((person) =>
              person.id === editId
                ? { ...person, name: trimmedName, email: trimmedEmail }
                : person,
            ),
          );
          setName("");
          setEmail("");
          setEditId(null);
        });
    }
  };

  const handleEdit = (person) => {
    setName(person.name);
    setEmail(person.email);
    setEditId(person.id);
  };

  return (
    <div className="container">
      <h1>CRUD Operations</h1>
      <table border={1} style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>S.No:</th>
            <th>Name:</th>
            <th>Email:</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {user.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                <button onClick={() => handleDelete(person.id)}>Delete</button>
                <button onClick={() => handleEdit(person)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="inputFields">
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={editId ? updateUser : postData}>
          {editId ? "Update Data" : "Add Data"}
        </button>
      </div>
    </div>
  );
}

export default Crud;

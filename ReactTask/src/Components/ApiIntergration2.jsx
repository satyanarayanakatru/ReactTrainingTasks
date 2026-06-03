import React from "react";
import useFetchData from "./useFetchData";
import "./ApiIntergration2.css";

function ApiIntergration2() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1>Task 14 – API Integration using Custom Hook For Posts API</h1>

      <div className="posts-grid">
        {data.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-info">
              <span>Post {post.id}</span>
            </div>

            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiIntergration2;

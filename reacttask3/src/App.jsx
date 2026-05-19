import React from "react";
import "./App.css";
import ListRender from "./Components/ListRender";
import ConditionalRender from "./Components/ConditionalRender";

function App() {
  return (
    <div className="container">
      <ConditionalRender />
      <ListRender />
    </div>
  );
}

export default App;

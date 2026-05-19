import React, { useState } from "react";
import Counter from "./Components/Counter";
import Theme from "./Components/Theme";
import "./App.css";

function App() {
  const [lightMode, setLightMode] = useState(true);

  const appTheme = {
    backgroundColor: lightMode ? "white" : "black",
    color: lightMode ? "black" : "white",
    minHeight: "100vh",
    padding: "20px",
  };
  return (
    <div style={appTheme}>
      <h1 className="main-heading">
        This is Task 4 – Counter & Theme Toggle using useState
      </h1>
      <Counter />
      <Theme lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
}

export default App;

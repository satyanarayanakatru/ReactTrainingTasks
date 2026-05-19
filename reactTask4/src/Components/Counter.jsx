import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>

      <h2 className="counter-value">{count}</h2>

      <div className="button-group">
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button className="btn decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button className="btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

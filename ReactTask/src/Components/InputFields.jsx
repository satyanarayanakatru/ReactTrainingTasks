import React, { useContext } from "react";
import { FormContext } from "../App";

function InputFields() {
  const { formData, handleChange, mode, setMode } = useContext(FormContext);

  return (
    <div>
      <button
        className="btn toggle-btn"
        onClick={() => setMode(mode === "light" ? "black" : "light")}
      >
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>

      <input
        className="input-field"
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        className="input-field"
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        className="input-field"
        type="text"
        name="mobile"
        placeholder="Enter Mobile"
        value={formData.mobile}
        onChange={handleChange}
      />

      <button className="btn submit-btn" type="submit">
        Submit
      </button>
    </div>
  );
}

export default InputFields;

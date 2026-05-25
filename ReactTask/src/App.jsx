import React, { createContext, useState } from "react";
import FormValidation from "./Components/FormValidation";
import FetchDataApi from "./Components/FetchDataApi";
import ProfileImageUpload from "./Components/ProfileImageUpload";
import Form from "./Components/Form";
import "./App.css";

export const FormContext = createContext();

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [mode, setMode] = useState("light");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={`app ${mode}`}>
      {/* <FormValidation /> */}
      {/* <FetchDataApi /> */}
      {/* <ProfileImageUpload /> */}
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>useContext Form Example</h1>
        <FormContext.Provider
          value={{
            formData,
            handleChange,
            mode,
            setMode,
          }}
        >
          <Form />
        </FormContext.Provider>

        <hr />

        <div className="preview-box">
          <h2>User Entered Data</h2>

          <p>
            <strong>Name:</strong> {formData.name}
          </p>

          <p>
            <strong>Email:</strong> {formData.email}
          </p>

          <p>
            <strong>Mobile:</strong> {formData.mobile}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

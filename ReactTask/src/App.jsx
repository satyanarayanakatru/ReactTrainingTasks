import React, { createContext, useState } from "react";
import FormValidation from "./Components/FormValidation";
import FetchDataApi from "./Components/FetchDataApi";
import ProfileImageUpload from "./Components/ProfileImageUpload";
import Form from "./Components/Form";
import "./App.css";
import MiniChatApp from "./Components/MiniChatApp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import Profile from "./Routing/Profile";
import About from "./Routing/About";
import Services from "./Routing/Services";
import Contact from "./Routing/Contact";
import Logo from "./assets/Logo1.png";
import AppDevelopment from "./Routing/AppDevelopment";
import WebDevelopment from "./Routing/WebDevelopment";
import UIUXDesign from "./Routing/UIUXDesign";
import DigitalMarketing from "./Routing/DigitalMarketing";
import UserListComponent from "./Components/UserList";
import UserDetails from "./Components/UserDetails";

export const FormContext = createContext();

const display = false;

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
    <div>
      {display && (
        <div className={`app ${mode}`}>
          <FormValidation />
          <FetchDataApi />
          <ProfileImageUpload />
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
          <MiniChatApp />
        </div>
      )}

      <BrowserRouter>
        <div className="header">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" width={400} />
            </Link>
          </div>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<UserListComponent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
            <Route path="appdevelopment" element={<AppDevelopment />} />
            <Route path="webdevelopment" element={<WebDevelopment />} />
            <Route path="uiuxdesign" element={<UIUXDesign />} />
            <Route path="digitalmarketing" element={<DigitalMarketing />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./FormValidation.css";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    allFields: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      password: "",
      mobile: "",
      allFields: "",
    };

    // Empty Fields Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.country ||
      !formData.zipCode
    ) {
      newErrors.allFields = "Please fill all fields";
    }

    // Name Validation
    if (formData.name.length < 5 || formData.name.length > 10) {
      newErrors.name = "Name must be minimum 5 and maximum 10 characters";
    }

    // Email Validation
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid Email Address";
    }

    // Password Validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Passwords do not match";
    }

    // Mobile Validation
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter valid 10 digit mobile number";
    }

    setError(newErrors);

    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.mobile &&
      !newErrors.allFields
    ) {
      console.log("Form Submit Successful");
      alert("Form Submit Successful");
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Form Validation</h1>

        {error.allFields && <p style={{ color: "red" }}>{error.allFields}</p>}

        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}

        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          placeholder="Enter Mobile Number"
          onChange={handleChange}
        />
        {error.mobile && <p style={{ color: "red" }}>{error.mobile}</p>}

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

        <input
          type="text"
          name="address"
          value={formData.address}
          placeholder="Enter Address"
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          placeholder="Enter City"
          onChange={handleChange}
        />

        <input
          type="text"
          name="state"
          value={formData.state}
          placeholder="Enter State"
          onChange={handleChange}
        />

        <input
          type="text"
          name="country"
          value={formData.country}
          placeholder="Enter Country"
          onChange={handleChange}
        />

        <input
          type="number"
          name="zipCode"
          value={formData.zipCode}
          placeholder="Enter Zipcode"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;

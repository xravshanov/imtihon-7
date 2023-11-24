/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// RegistrationForm.js
import React, { useState } from "react";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

const RegistrationForm = ({ history }) => {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user data in localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Redirect to sign-in page
    history.push("/signin");
  };

  return (
    
    <div>
      <Header/>
      <div className="container">
      <div className="reg">
      <h2 className="registerpo">Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
          className="input"
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="number:"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="name:"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password:"
          />
        </label>
        <br />
        <Link to='/'><button type="submit">Register</button></Link>
      </form>
    </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

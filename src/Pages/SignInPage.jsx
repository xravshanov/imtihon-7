/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// SignInForm.js
import React, { useState } from "react";

const SignInForm = ({ history }) => {
  const [signInData, setSignInData] = useState({
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Check if credentials match
    if (
      storedUserData &&
      storedUserData.number === signInData.number &&
      storedUserData.password === signInData.password
    ) {
      alert("Sign-in successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={signInData.number}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={signInData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;

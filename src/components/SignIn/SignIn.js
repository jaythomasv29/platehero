import React, { useState } from "react";

import "./SignIn.css";
function SignIn() {
  const defaultFields = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const [formFields, setFormFields] = useState(defaultFields);
  return (
    <div className="form-container">
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={formFields.name}
            name="name"
            onChange={handleChange}
            placeholder="Full Name e.g Jane Doe"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formFields.email}
            name="email"
            onChange={handleChange}
            placeholder="email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={formFields.password}
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={formFields.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default SignIn;

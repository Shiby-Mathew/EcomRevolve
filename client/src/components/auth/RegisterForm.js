import React from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register form submission logic
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;

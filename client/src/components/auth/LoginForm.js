import React from "react";
// import "./LoginForm.css";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login form submission logic
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;

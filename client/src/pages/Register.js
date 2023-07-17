import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import "./Page.css";

function Register() {
  return (
    <div className="register-content">
      <div className="container">
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;

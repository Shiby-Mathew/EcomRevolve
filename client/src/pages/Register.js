import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
// import "./Register.css";

function Register() {
  return (
    <div className="signup-content">
      <h1 className="signup-heading">Register</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;

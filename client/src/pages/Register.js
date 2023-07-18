import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import "./Register.css";

function Register() {
  return (
    <div className="register-content">
      <h1 className="register-heading">Register</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;

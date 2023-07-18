import React from "react";
import LoginForm from "../components/auth/LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="login-content">
      <h1 className="login-heading">Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;

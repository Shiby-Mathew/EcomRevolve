import React from "react";
import LoginForm from "../components/auth/LoginForm";
import "./Page.css";

function Login() {
  return (
    <div className="login-content">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <span className="navbar-brand">eCommerce Revolve</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

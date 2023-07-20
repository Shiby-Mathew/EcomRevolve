import React from "react";
import "./Navbar.css";

import Auth from "../../utils/auth";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <span className="navbar-brand">
          <a className="nav-link" href="/">
            eCommerce Revolve
          </a>
        </span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          {Auth.loggedIn() ? (
            <>
              <li className="nav-item">
                <a className="nav-link" >
                <button onClick={logout}> Logout</button>

                </a>
              </li>
              {/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button> */}
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

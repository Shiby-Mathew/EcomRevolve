import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-content">
      <div className="container">
        <h1>
          eCommerce Revolve, a place where you can share your shopping
          experiences.
        </h1>
        <div className="marketplace-list">
          <div className="marketplace-item">
            <Link to="/marketplace1">
              {/* <img src={placeholderImage1} alt="Marketplace 1" /> */}
            </Link>
          </div>
          <div className="marketplace-item">
            <Link to="/marketplace2">
              {/* <img src={placeholderImage2} alt="Marketplace 2" /> */}
            </Link>
          </div>
          {/* Add more marketplace placeholders as needed */}
        </div>
      </div>
    </div>
  );
}

export default Home;

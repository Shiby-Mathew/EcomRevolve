import React from "react";
import { Link } from "react-router-dom";
// import "./Home.css";

const marketplaces = [
  {
    id: 1,
    name: "Amazon",
    imageSrc: require("../images/amazon.png"),
    altText: "Amazon Marketplace",
    link: "/marketplace/amazon",
  },
  {
    id: 2,
    name: "eBay",
    imageSrc: require("../images/ebay.png"),
    altText: "eBay Marketplace",
    link: "/marketplace/ebay",
  },
  {
    id: 3,
    name: "Catch",
    imageSrc: require("../images/catch.png"),
    altText: "Catch Marketplace",
    link: "/marketplace/catch",
  },
];

function Home() {
  return (
    <div className="home-content">
      <div className="container">
        {/* <h1>
          eCommerce Revolve, a place where you can share your shopping
          experiences.
        </h1> */}
        <div className="marketplace-list">
          {marketplaces.map((marketplace) => (
            <div className="marketplace-item" key={marketplace.id}>
              <Link to={marketplace.link}>
                <img src={marketplace.imageSrc} alt={marketplace.altText} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

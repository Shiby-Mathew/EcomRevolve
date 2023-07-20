import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_LISTS } from "../utils/queries";
// import "./Home.css";

// const marketplaces = [
//   {
//     id: 1,
//     name: "Amazon",
//     imageSrc: require("../images/amazon.png"),
//     altText: "Amazon Marketplace",
//     link: "/marketplace/1",
//   },
//   {
//     id: 2,
//     name: "eBay",
//     imageSrc: require("../images/ebay.png"),
//     altText: "eBay Marketplace",
//     link: "/marketplace/2",
//   },
//   {
//     id: 3,
//     name: "Catch",
//     imageSrc: require("../images/catch.png"),
//     altText: "Catch Marketplace",
//     link: "/marketplace/3",
//   },
// ];

function Home() {
  const { loading, data } = useQuery(QUERY_LISTS);

  console.log(data);
  const marketplaces = data?.lists || [];

  console.log(marketplaces);
  return (
    <div className="home-content">
      <div className="container">
        {/* <h1>
          eCommerce Revolve, a place where you can share your shopping
          experiences.
        </h1> */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="marketplace-list">
            {marketplaces.map((marketplace) => (
              <div className="marketplace-item" key={marketplace.id}>
                <Link to={marketplace.id}>
                  <img src={marketplace.imageSrc} alt={marketplace.altText} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

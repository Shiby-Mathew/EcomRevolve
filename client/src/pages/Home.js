import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MARKETPLACES } from "../utils/queries";
//import Marketplace from "./Marketplace";

function Home() {
  const { loading, data } = useQuery(QUERY_MARKETPLACES);

  console.log(data);
  const marketplaces = data?.marketplaces || [];

  console.log(marketplaces);
  return (
    <div className="home-content">
      <div className="container">
        {/* <h1>
          eCommerce Revolve, a place where you can share your shopping
          experiences.
        </h1> */}
        {loading ? (
          <>
            <div>Loading...</div>
          </>
        ) : (
          <>
            <div className="marketplace-list">
              {marketplaces.map((marketplace) => (
                <div className="marketplace-item" key={marketplace.id}>
                  <Link
                    to={`marketplace/${marketplace._id}/${marketplace.name}`}
                  >
                    <img src={marketplace.imageSrc} alt={marketplace.altText} />
                    {/* <Marketplace marketplace={marketplace} key={marketplace.id} /> */}
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

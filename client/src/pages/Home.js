import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MARKETPLACES } from "../utils/queries";

import StripeContainer from "../components/StripeContainer";
import Auth from "../utils/auth";

function Home() {
  const { loading, data } = useQuery(QUERY_MARKETPLACES);

  const marketplaces = data?.marketplaces || [];
  const [showItem, setshowItem] = useState(false);

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
                <div className="marketplace-item" key={marketplace._id}>
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

      <div className="donation">
        <h3 className="donheading">Please Donate</h3>
        {showItem ? (
          <StripeContainer />
        ) : (
          <>
            {" "}
            <select className="new">
              <option value="0">Donation Amount</option>
              <option value="1">$5</option>
              <option value="2">$10</option>
              <option value="3">$15</option>
              <option value="">$None</option>
            </select>
            <button className="donButton" onClick={() => setshowItem(true)}>
              Donate
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

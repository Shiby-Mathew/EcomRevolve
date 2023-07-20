import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../services/reviewService";
import ReviewList from "../components/ReviewList";

function Marketplace() {
  const { marketplaceId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        // Replace 'fetchReviews()' with your actual function to fetch reviews for the specific marketplaceId
        const reviewsData = await fetchReviews(marketplaceId);
        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();
  }, [marketplaceId]);

  // Placeholder marketplace data
  const marketplaceData = {
    ebay: {
      name: "eBay Australia",
      link: "https://www.ebay.com.au/",
      shippingTime: "2-6 business days",
      productCategories: ["Electronics", "Fashion", "Home & Garden", "Toys"],
      services: [
        "Buyer Protection",
        "Click & Collect",
        "Easy Returns",
        "eBay Plus Subscription",
      ],
    },
    amazon: {
      name: "Amazon Australia",
      link: "https://www.amazon.com.au/",
      shippingTime: "1-3 business days",
      productCategories: ["Books", "Electronics", "Beauty", "Kitchen"],
      services: [
        "Amazon Prime",
        "Free Shipping on Eligible Orders",
        "Easy Returns",
        "Customer Support 24/7",
      ],
    },
    catch: {
      name: "Catch",
      link: "https://www.catch.com.au/",
      shippingTime: "3-7 business days",
      productCategories: ["Fashion", "Home & Kitchen", "Sports", "Groceries"],
      services: [
        "Club Catch Membership",
        "Express Delivery",
        "30-Day Free Returns",
        "Customer Service",
      ],
    },
  };

  const currentMarketplace = marketplaceData[marketplaceId];

  // Check if currentMarketplace exists before rendering
  if (!currentMarketplace) {
    return <div className="marketplace-content">Marketplace not found.</div>;
  }

  return (
    <div className="marketplace-content">
      <div className="marketplace-container">
        <a href={currentMarketplace.link}>
          <h1 className="marketplace-heading">{currentMarketplace.name}</h1>
        </a>
        <div className="marketplace-info">
          <p>
            <strong>Shipping Time:</strong> {currentMarketplace.shippingTime}
          </p>
          <p>
            <strong>Product Categories:</strong>
          </p>
          <ul className="categories-list">
            {currentMarketplace.productCategories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
          <p>
            <strong>Services:</strong>
          </p>
          <ul className="services-list">
            {currentMarketplace.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="customer-reviews">
        <h2 className="reviews-heading">Customer Reviews</h2>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}

export default Marketplace;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../services/reviewService";
import ReviewList from "../components/ReviewList";
import "./Marketplace.css";

function Marketplace() {
  const { marketplaceId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsData = await fetchReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();
  }, []);

  return (
    <div className="marketplace-content">
      <div className="container">
        <h1 className="marketplace-heading">Marketplace {marketplaceId}</h1>
        {/* Display marketplace information and products */}
      </div>
      <div className="customer-reviews">
        <h2 className="reviews-heading">Customer Reviews</h2>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}

export default Marketplace;

import React, { useEffect, useState } from "react";
import { fetchReviews } from "../services/reviewService";
import ReviewList from "../components/ReviewList";

function Reviews() {
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
    <div className="reviews-content">
      <div className="container">
        <h1>Reviews</h1>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}

export default Reviews;

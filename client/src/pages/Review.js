import React, { useEffect, useState } from "react";
import ReviewList from "../components/ReviewList";
import reviewService from "../services/reviewService";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the server when the component mounts
    reviewService.getAllReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default Reviews;

import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
// import "./ReviewList.css";

function ReviewList({ reviews }) {
  console.log(reviews);
  console.log(reviews._id);
  console.log(reviews.name);
  
  const viewReviews = reviews.reviews;
  console.log(viewReviews);

  const [review, setReview] = useState([]);

  return (
    <div className="review-list">
      {viewReviews.map((review) => (
        <ReviewItem key={review._id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;

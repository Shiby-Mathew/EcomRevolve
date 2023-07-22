import React from "react";
import ReviewItem from "./ReviewItem";
// import "./ReviewList.css";

function ReviewList({ reviews }) {
  // const [reviews, setReviews] = useState([]);

  return (
    <div className="review-list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;

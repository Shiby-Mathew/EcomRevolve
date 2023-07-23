import React, { useState } from "react";

function ReviewForm({ onAddReview }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      comment,
      // Others
    };

    onAddReview(reviewData);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="review-container">
        <h2>Add your review:</h2>
        <textarea
          className="review-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <a href="#" onClick={handleSubmit} className="submit-review-button">
          Submit Review
        </a>
      </div>
    </form>
  );
}

export default ReviewForm;

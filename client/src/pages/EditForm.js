import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_REVIEW } from "../utils/queries";
import { UPDATE_REVIEW } from "../utils/mutations";
import Auth from "../utils/auth";

const EditForm = () => {
  const { reviewId } = useParams();

  //const navigate = useNavigate();

  const { loading, data } = useQuery(QUERY_REVIEW, {
    // pass URL parameter
    variables: { reviewId: reviewId },
  });
  const reviewData = data?.reviews || {};

  console.log(reviewData);

  const [state, setState] = useState({
    title:reviewData.title,
    review:reviewData.review
  });

  // useEffect(() => {
  //   if (reviewData) setNewvalue(reviewData);
  // }, [reviewData]);

  // const [editReview, { error }] = useMutation(UPDATE_REVIEW);

  const handleChange = (e) => {

setState((prevState)=>{

})

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("editing");
  
    // try {
    //   const reviewData = await editReview({
    //     variables: {
    //       reviewId,
    //       updatedReview: {
    //         title,
    //         review,
    //         author: Auth.getProfile().data.username,
    //       },
    //     },
    //   });

    //   setTitle("");
    //   setReview("");
    //   window.location.reload();
    //   navigate(-1);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="review-container">
          <h2>Title:</h2>
          <input
            className="input"
            value={reviewData.title}
            name="title"
            onChange={handleChange}
            type="title"
          />

          <h2>Add your review:</h2>
          <textarea
            className="review-textarea"
            value={reviewData.review}
            name="review"
            onChange={handleChange}
          ></textarea>
          <a href="#" onClick={handleSubmit} className="submit-review-button">
            Edit Review
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

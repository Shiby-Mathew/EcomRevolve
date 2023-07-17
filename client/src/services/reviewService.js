import api from "../utils/api";

const reviewService = {
  getAllReviews: () => {
    return api.get("/reviews");
  },
};

export default reviewService;

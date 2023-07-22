import { getReviews, login, register } from "../utils/api";

export const fetchReviews = async () => {
  try {
    const reviews = await getReviews();
    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await login(email, password);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const user = await register(name, email, password);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addReview = async (reviewData) => {
  try {
    const newReview = {
      id: Math.random().toString(), // Generate a random ID
      ...reviewData,
    };

    // Here you would typically make an API request to add the new review to the backend
    // For this example, we will just return the new review without actually adding it to the database
    return newReview;
  } catch (error) {
    throw new Error(error.message);
  }
};

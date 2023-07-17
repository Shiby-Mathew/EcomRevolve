import { getReviews, login, register } from "../utils/api";

// Use the imported functions
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

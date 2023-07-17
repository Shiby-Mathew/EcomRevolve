import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Set the base URL for API requests
});

export default api;

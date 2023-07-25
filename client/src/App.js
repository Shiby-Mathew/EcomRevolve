import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import ReviewForm from "./pages/ReviewForm";
import EditForm from "./pages/EditForm";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/marketplace/:marketplaceId/:marketplacename"
            element={<Marketplace />}
          />{" "}
          {/* Dynamic route for marketplace pages */}
          <Route
            path="/marketplace/:marketplaceId/add-review"
            element={<ReviewForm />}
          />
          <Route
            path="/marketplace/:reviewId/edit-review"
            element={<EditForm />}
          />{" "}
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

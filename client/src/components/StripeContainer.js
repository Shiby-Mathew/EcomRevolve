import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51NenldBcn2qJuIxEisP7pnsG4iEzI4KKlFyl3xIHXA9dYmRfrjhiQDMpvpHQvRtEJcXxN6rN26PqMD2CEilvJ9Aq00zEL4yYuJ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

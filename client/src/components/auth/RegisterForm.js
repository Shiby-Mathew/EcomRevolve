import React, { useState } from "react";
//import "./RegisterForm.css";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const RegisterForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    console.log(formState.name);
    console.log(formState.email);

    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="username"
          placeholder="Your username"
          name="username"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Your email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          name="password"
          value={formState.password}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

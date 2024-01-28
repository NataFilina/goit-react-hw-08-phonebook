import React, { useState } from 'react';
import css from './FormLogin.module.css';
import { NavLink } from 'react-router-dom';

export const FormLogin = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerFormSubmits = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    login({
      email: email.value,
      password: password.value,
    });
    e.target.reset();
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <NavLink className={css.btnHome} to="/">
        Back to home
      </NavLink>
      <form className={css.form} onSubmit={handlerFormSubmits}>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="tel"
            name="email"
            required
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="tel"
            name="password"
            required
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button className={css.btn} type="submit">
          Login
        </button>
        <NavLink className={css.register} to="/register">
          Register
        </NavLink>
      </form>
    </>
  );
};

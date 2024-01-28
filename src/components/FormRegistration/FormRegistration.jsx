import css from './FormRegistration.module.css';
import { NavLink } from 'react-router-dom';

export const FormRegistration = ({ register }) => {
  const handlerFormSubmits = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    e.target.reset();
  };

  return (
    <>
      <NavLink className={css.btnHome} to="/">
        Back to home
      </NavLink>

      <form className={css.form} onSubmit={handlerFormSubmits}>
        <label className={css.label}>
          Name
          <input className={css.input} type="text" name="name" required />
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            required
          ></input>
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            required
          ></input>
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
        <NavLink className={css.login} to="/login">
          Login
        </NavLink>
      </form>
    </>
  );
};

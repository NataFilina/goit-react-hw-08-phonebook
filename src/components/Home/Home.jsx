import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectorIsAuth } from '../../redux/selectors';
import welcome from '../../images/welcome.jpg';
import books from '../../images/books.jpg';
import css from './Home.module.css';

function Home() {
  const isAuth = useSelector(selectorIsAuth);

  return (
    <>
      <h1 className={css.mainTitle}>Phone book</h1>
      {isAuth ? (
        <div className={css.wrapper}>
          <p className={css.title}>Welcome!</p>
          <p className={css.text}>Enjoy using our application✨</p>
          <img src={welcome} alt="welcome" width={550} className={css.img} />
        </div>
      ) : (
        <div className={css.wrapper}>
          <p className={css.title}>
            You can use our website to store contacts.
          </p>
          <p className={css.text}>
            To get started, you need to{' '}
            <NavLink to="/register">register</NavLink>, or, if you already have
            a personal account, just <NavLink to="/login">login</NavLink>
          </p>
          <img src={books} alt="welcome" width={550} className={css.img} />
        </div>
      )}
    </>
  );
}

export default Home;

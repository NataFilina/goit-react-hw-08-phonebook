import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { useSelector } from 'react-redux';
import { RiContactsBookLine } from 'react-icons/ri';
import { selectorProfile } from '../redux/selectors';
import { UserMenu } from './UserMenu/UserMenu';
import { Loader } from './Loader/Loader';
import { IconContext } from 'react-icons';

const SharedLayout = () => {
  const profile = useSelector(selectorProfile);

  return (
    <>
      <header>
        <div className={css.nav}>
          <NavLink className={css.btns} to="/">
            <IconContext.Provider value={{ size: '30px' }}>
              <RiContactsBookLine /> Home
            </IconContext.Provider>
          </NavLink>
          <NavLink to="/contacts" className={css.btns}>
            Contacts
          </NavLink>

          {profile ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/register" className={css.btns}>
                Register
              </NavLink>
              <NavLink to="/login" className={css.btns}>
                Login
              </NavLink>
            </>
          )}
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;

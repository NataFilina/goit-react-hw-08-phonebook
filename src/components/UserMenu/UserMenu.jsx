import { useDispatch, useSelector } from 'react-redux';
import { selectorProfile } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../redux/thunks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const profile = useSelector(selectorProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('login');
  };
  return (
    <div className={css.nav}>
      <p className={css.text}>{profile.name}</p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

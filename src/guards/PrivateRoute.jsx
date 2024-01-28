import React from 'react';
import { useSelector } from 'react-redux';
import { selectorIsAuth } from '../redux/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(selectorIsAuth);
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;

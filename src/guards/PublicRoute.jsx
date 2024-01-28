import React from 'react';
import { useSelector } from 'react-redux';
import { selectorIsAuth } from '../redux/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectorIsAuth);
  const { state: prevLocation } = useLocation();
  return !isAuth ? children : <Navigate to={prevLocation ?? '/'} />;
};

export default PublicRoute;

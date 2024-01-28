import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsAuth, selectorProfile } from '../redux/selectors';
import { Suspense, useEffect } from 'react';
import { refreshThunk } from '../redux/thunks';
import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';
import { Loader } from './Loader/Loader';

const SharedLayout = lazy(() => import('../components/SaredLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const token = useSelector(selectorIsAuth);
  const prof = useSelector(selectorProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    !prof && token && dispatch(refreshThunk());
  }, [prof, token, dispatch]);

  return (
    <>
      <Loader />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />{' '}
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

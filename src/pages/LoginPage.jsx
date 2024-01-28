import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../redux/thunks';
import { FormLogin } from 'components/FormLogin/FormLogin';

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = data => {
    dispatch(loginUserThunk(data));
  };

  return (
    <>
      <FormLogin login={login} />
    </>
  );
};

export default LoginPage;

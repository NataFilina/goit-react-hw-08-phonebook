import { FormRegistration } from 'components/FormRegistration/FormRegistration';
import { useDispatch } from 'react-redux';
import { registerNewUserThunk } from '../redux/thunks';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const register = data => {
    dispatch(registerNewUserThunk(data));
  };

  return (
    <>
      <FormRegistration register={register} />
    </>
  );
};

export default RegisterPage;

import { useSelector } from 'react-redux';
import { selectorError } from '../../redux/selectors';

export const Error = () => {
  const error = useSelector(selectorError);
  return <>{error && <h2>Error: {error}</h2>}</>;
};

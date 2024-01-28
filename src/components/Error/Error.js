import { useSelector } from 'react-redux';
import { selectorGlobalError } from '../../redux/selectors';

export const Error = () => {
  const error = useSelector(selectorGlobalError);
  return <>{error && <h2>Error: {error}</h2>}</>;
};

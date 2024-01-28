import { ThreeCircles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectorGlobalLoading } from '../../redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectorGlobalLoading);
  return (
    <>
      {isLoading && (
        <ThreeCircles
          visible={true}
          height="200"
          width="200"
          color="rgb(27, 1, 49)"
          ariaLabel="three-circles-loading"
          wrapperStyle={{ margin: '200px 49% 200px 49%' }}
        />
      )}
    </>
  );
};

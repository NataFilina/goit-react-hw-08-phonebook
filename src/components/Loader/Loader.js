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
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{ margin: '0 auto' }}
        />
      )}
    </>
  );
};

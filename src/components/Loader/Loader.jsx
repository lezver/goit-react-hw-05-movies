import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor="tomato"
    innerCircleColor="gray"
    middleCircleColor="tomato"
  />
);

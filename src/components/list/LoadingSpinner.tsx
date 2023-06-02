import styled, { keyframes } from 'styled-components';

import * as SVG from '@/assets/Icons';

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <SVG.LoadingIcon />
    </SpinnerWrapper>
  );
};

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  animation: ${rotation} 1s linear infinite;
`;

export default LoadingSpinner;

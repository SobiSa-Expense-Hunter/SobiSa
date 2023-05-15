import styled from 'styled-components';

import { Centering } from '@/components/layout/AppLayout';

import { LoadingSpinner } from './styles';

function Loading() {
  return (
    <LoadingWrapper>
      <LoadingSpinner />
    </LoadingWrapper>
  );
}

export default Loading;

const LoadingWrapper = styled(Centering)`
  height: 519px;
  width: 100%;
`;

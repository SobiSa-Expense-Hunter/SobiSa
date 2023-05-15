import styled, { keyframes } from 'styled-components';

import * as SVG from '@/assets/Icons';

export const StyledListContainer = styled.div<{ select?: boolean }>`
  cursor: pointer;
  &:hover {
    background: #fff5e6;
  }
  display: flex;
  align-items: center;
  padding: 20px 0px;
  gap: 16px;
  margin: 0;

  width: 310px;
  height: 151px;

  border-width: 1px 0px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.mainColor};
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled(SVG.LoadingIcon)`
  animation: ${rotation} 1s linear infinite;
`;

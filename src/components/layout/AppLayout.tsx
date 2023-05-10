import { ReactNode } from 'react';

import styled from 'styled-components';

import Header from '../common/Header';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Centering>
      <Header />
      <FixedWidth>{children}</FixedWidth>
    </Centering>
  );
}

export const Centering = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FixedWidth = styled.div`
  width: 375px;
  padding: 0 16px;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

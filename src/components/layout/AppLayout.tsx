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

const Centering = styled.div`
  display: flex;
  justify-content: center;
`;

const FixedWidth = styled.div`
  width: 375px;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

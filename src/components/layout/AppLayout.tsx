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
  background-color: white;
  min-height: calc(100vh - 41px);
  @media (max-width: 375px) {
    width: 100%;
  }
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

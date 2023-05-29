import { ReactNode } from 'react';

import styled from 'styled-components';

import Header from '../common/Header';
import Footer from '@/components/common/Footer';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Centering>
      <FixedWidth>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </FixedWidth>
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
  overflow-y: auto;
  width: 375px;
  padding: 0 16px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;

  @supports (height: 100svh) {
    height: 100svh;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  flex: 1;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
`;

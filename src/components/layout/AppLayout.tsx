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
  overflow: hidden;
  overflow-y: auto;
  width: 375px;
  padding: 0 16px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-height: 100vh;

  @supports (height: 100svh) {
    height: 100svh;
    max-height: 100svh;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  flex: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 15vh - 45px);
  @supports (height: 10svh) {
    height: calc(100% - 15svh - 45px);
  }
`;

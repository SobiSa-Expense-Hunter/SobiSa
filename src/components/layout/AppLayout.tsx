import { ReactNode } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function AppLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <Centering>
      <FixedWidth>
        {router.asPath !== '/about' && <Header />}
        {router.asPath.includes('/list') ? (
          <Content heightRestrict>{children}</Content>
        ) : (
          <Content>{children}</Content>
        )}
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

const Content = styled.div<{ heightRestrict?: boolean }>`
  flex: auto;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ heightRestrict }) => (heightRestrict ? 'calc(100% - 15vh - 45px)' : 'inherit')};
  @supports (height: 10svh) {
    height: ${({ heightRestrict }) => (heightRestrict ? 'calc(100% - 15svh - 45px)' : 'inherit')};
  }
`;

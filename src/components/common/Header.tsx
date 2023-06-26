import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import * as Icon from '@/assets/Icons';
import * as Layout from '@/components/common/layout';
import { Medium } from '@/styles/font';

const Header = () => {
  const router = useRouter();
  const isHome = router.asPath === '/';

  return (
    <HeaderWrapper>
      {isHome ? (
        <Layout.Box width='40px' height='40px' />
      ) : (
        <Button onClick={() => router.back()}>
          <Icon.LeftIcon />
        </Button>
      )}
      <StyleTextLogo>
        <Link href='/'>
          <Medium>SOBISA!</Medium>
        </Link>
      </StyleTextLogo>
      {isHome ? (
        <Button onClick={() => router.push('/about')}>
          <Icon.Info width={14} height={14} />
        </Button>
      ) : (
        <Layout.Box width='40px' height='40px' />
      )}
    </HeaderWrapper>
  );
};

export default Header;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  width: 40px;
  height: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0;
  left: 0;
`;

const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: -1px;
  align-items: center;
  width: 310px;
  height: 42px;
  min-height: 42px;
  background-color: white;
  padding: 5vh 0 2vh;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (padding-top: 5svh) {
    padding: 5svh 0 2svh;
  }
`;

const StyleTextLogo = styled(Medium)`
  flex: 1;
  user-select: none;
  text-align: center;
`;

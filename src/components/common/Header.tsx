import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { LeftIcon } from '@/assets/Icons';
import { Medium } from '@/styles/font';

const Header = () => {
  const router = useRouter();
  const isHome = router.asPath === '/';

  return (
    <HeaderWrapper>
      {isHome ? null : (
        <Button onClick={() => router.back()}>
          <LeftIcon />
        </Button>
      )}
      <StyleTextLogo>
        <Link href='/'>
          <Medium>SOBISA!</Medium>
        </Link>
      </StyleTextLogo>
    </HeaderWrapper>
  );
};

export default Header;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;

  display: flex;
  padding: 0;
  position: absolute;
  left: 0;
`;

const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  width: 310px;
  height: 41px;
  min-height: 41px;
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

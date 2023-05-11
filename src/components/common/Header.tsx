import { useRouter } from 'next/router';
import styled from 'styled-components';

import { LeftIcon } from '@/assets/icons';
import { Medium } from '@/styles/font';

const Header = () => {
  const router = useRouter();
  const isHome = router.asPath === '/search';

  return (
    <HeaderWrapper>
      {isHome ? null : (
        <Button onClick={() => router.back()}>
          <LeftIcon />
        </Button>
      )}
      <StyleTextLogo>
        <Medium>SOBISA!</Medium>
      </StyleTextLogo>
    </HeaderWrapper>
  );
};

export default Header;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  height: 100%;
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
  background-color: white;
  z-index: 1000;
`;

const StyleTextLogo = styled(Medium)`
  flex: 1;
  user-select: none;
  text-align: center;
`;

import React from 'react';

import styled from 'styled-components';

import { LeftIcon, HamburgerIcon } from '@/assets/Icons';
import { Medium } from '@/styles/font';

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <LeftIcon />
      <StyleTextLogo>
        <div>SOBISA!</div>
      </StyleTextLogo>
      <HamburgerIcon />
    </StyledHeaderWrapper>
  );
};

export default Header;

const StyledHeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  width: 310px;
  height: 41px;
  background-color: white;

  svg {
    cursor: pointer;
  }
`;

const StyleTextLogo = styled(Medium)`
  flex: 1;
  user-select: none;
  text-align: center;
`;

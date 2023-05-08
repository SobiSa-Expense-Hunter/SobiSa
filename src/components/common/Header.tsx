import React from 'react';

import styled from 'styled-components';

import { HamburgerIcon, LeftIcon } from '@/assets/icons';
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

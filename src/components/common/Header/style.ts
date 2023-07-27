import styled from 'styled-components';

import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

export const HeaderWrapper = styled.header`
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

export const StyleTextLogo = styled(Font.Medium)`
  flex: 1;
  user-select: none;
  text-align: center;
`;

export const Line = styled.hr`
  height: 1px;
  width: 90%;
  margin: 0;
  border: none;
  background: ${props => props.theme.colors.gray[1]};
`;

export const UserFormHref = styled(Layout.VStack)`
  background: #faf5e9;
`;

export const TagRoundOrang = styled(Layout.Box)`
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
`;

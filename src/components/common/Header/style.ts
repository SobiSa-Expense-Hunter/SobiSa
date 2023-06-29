import { motion } from 'framer-motion';
import styled from 'styled-components';

import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

export const Button = styled(motion.button)`
  outline: none;
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0;
  left: 0;

  :hover {
    background-color: ${props => props.theme.colors.gray[0]};
    transition: all 500ms;
  }
`;

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

export const SearchHeader = styled(Layout.HStack)`
  padding: 5vh calc(2vh + 16px) calc((100% - 80%) / 2);
  height: 42px;
  min-height: 42px;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
  @media (padding-top: 5svh) {
    padding: 5svh 0 2svh;
  }

  @media (max-width: 768px) {
    padding: 5vh 16px;
  }
`;

export const Line = styled.hr`
  height: 1px;
  width: 90%;
  margin: 0;
  border: none;
  background: ${props => props.theme.colors.gray[1]};
`;

export const ListBox = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 80%;
  height: 100vh;

  z-index: 2;
  background: #ffffff;
`;

export const Absolute = styled(Layout.VStack)`
  position: absolute;
  width: 375px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

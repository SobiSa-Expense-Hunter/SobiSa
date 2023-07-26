import { motion } from 'framer-motion';
import styled from 'styled-components';

import * as Layout from '@/components/common/layout';

export const Absolute = styled(Layout.VStack)`
  position: absolute;
  width: 375px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListBox = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 80%;
  height: 100vh;
  /* for iphone safari 100vh bug fix */
  height: -webkit-fill-available;
  height: fill-available;

  z-index: 2;
  background: #ffffff;
`;

export const SearchHeader = styled(Layout.HStack)`
  padding: 5vh calc(1vw + 16px) 14px 60px;
  height: 42px;
  min-height: 42px;

  @media (padding-top: 5svh) {
    padding: 5svh calc(1vw + 16px) 2svh 60px;
  }

  @media (width>= 768px) {
    padding: 5vh calc(1vw + 16px) 16px 60px;
  }
`;

export const TooltipPosition = styled(Layout.VStack)`
  padding: 0 45px;

  @media (width >= 768px) {
    padding: 0 calc(1vw + 20px + 20px);
  }
`;

export const YScroll = styled(Layout.VStack)`
  overflow: auto;
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 14px;
    border-radius: 7px;
    background-clip: padding-box;
    border: 5px solid white;
    margin-right: 5px;
  }

  ::-webkit-scrollbar-track-piece {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[2]};
  }
`;

export const Href = styled.div`
  cursor: pointer;
`;

export const ToastBackground = styled.div`
  z-index: 2;
  div {
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 600;
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

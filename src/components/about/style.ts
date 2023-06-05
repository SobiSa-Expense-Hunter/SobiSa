import styled from 'styled-components';

import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

export const Scroll = styled(Layout.VStack)`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px 15px;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[2]};
  }
`;

export const AboutFont = {
  Skip: styled(Font.Medium)`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[2]};
  `,
  DetilGrayText: styled(Font.Medium)`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[4]};
  `,
};

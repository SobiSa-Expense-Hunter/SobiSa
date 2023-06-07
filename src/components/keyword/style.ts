import styled from 'styled-components';

import { DefaultTagStyle } from '@/components/common/buttons';
import { DefaultInput } from '@/components/common/input';
import * as Font from '@/styles/font';

export const KeywordPageFont = {
  Main: styled(Font.Large)``,
  Sub: styled(Font.Medium)`
    color: ${({ theme }) => theme.colors.gray[3]};
    font-weight: 600;
  `,
};

export const KeywordButton = styled.button<{ isSelected: boolean }>`
  ${DefaultTagStyle}
  background: ${({ isSelected, theme }) => {
    if (isSelected) return theme.colors.mainColor;
    return theme.colors.gray[0];
  }};

  color: ${({ isSelected, theme }) => {
    if (isSelected) return 'white';
    return theme.colors.gray[3];
  }};
`;

export const Span = styled.span`
  ${DefaultInput};
  min-height: 38px;
  width: 100%;
  line-height: 100%;
`;

export const ResetBtn = styled.button`
  border: none;
  background: none;
`;

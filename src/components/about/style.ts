import styled from 'styled-components';

import * as Font from '@/styles/font';

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

export const Highlight = styled.div`
  display: inline-block;
  height: 1.3em;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.subColor} 60%, transparent 20%);
`;

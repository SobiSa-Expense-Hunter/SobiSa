import styled from 'styled-components';

import * as Font from '@/styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  max-width: 310px;
  width: 100%;
`;

export const KeywordPageFont = {
  Main: styled(Font.Large)``,
  Sub: styled(Font.Medium)`
    color: ${({ theme }) => theme.colors.gray[3]};
    font-weight: 600;
  `,
};

export const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonBox = styled.div`
  margin-top: min(321px, 30svh);
  display: flex;
  justify-content: center;
`;

export const FlexColWrapper = styled.div`
  display: flex;
  max-width: 310px;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  align-items: stretch;
`;

export const Keyword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  gap: 8px 6px;
`;

export const KeywordWrapper = styled.button<{ isSelected: boolean }>`
  background: ${({ isSelected, theme }) => {
    if (isSelected) return theme.colors.mainColor;
    return theme.colors.gray[0];
  }};

  padding: 10px 15px;

  border-radius: 10px;
  border-style: none;

  font-family: 'Pretendard Variable';
  font-weight: 600;
  color: ${({ isSelected, theme }) => {
    if (isSelected) return 'white';
    return theme.colors.gray[3];
  }};
`;

export const GrayInput = styled.input`
  width: 100%;
  height: 38px;

  outline: none;
  border: 1px solid #cbcbcb;
  padding: 10px 20px;
  border-radius: 6px;
  text-overflow: ellipsis;
  &:disabled {
    background-color: white;
    cursor: not-allowed;
  }

  /*INPUT-FONT */
  font-family: 'Pretendard Variable';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.022em;

  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const ResetBtn = styled.button`
  border: none;
  background: none;
`;

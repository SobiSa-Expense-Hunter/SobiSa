/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

export const DefaultInput = css`
  width: 194px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[2]};
  padding: 10px 20px;
  border-radius: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;

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

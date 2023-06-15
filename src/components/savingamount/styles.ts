import styled from 'styled-components';

import * as Icon from '@/assets/Icons';
import { DefaultInput } from '@/components/common/input';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

export const Span = styled.span`
  ${DefaultInput}
  cursor: not-allowed;
  display: flex;
  align-items: center;
  min-height: 50px;
`;

export const Input = styled.input`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  outline: none;
  border: none;
  padding: 0;

  /*INPUT-FONT */
  font-family: 'Pretendard Variable';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.022em;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const InputBorder = styled(Layout.HStack)<{ focus: boolean }>`
  width: 194px;
  outline: none;
  border: ${({ theme, focus }) =>
    focus ? `2px solid ${theme.colors.mainColor}` : `1px solid ${theme.colors.gray[2]}`};
  padding: 10px 20px;
  border-radius: 6px;
  min-height: 50px;
`;

export const InitializationIcon = styled(Icon.InitializationIcon)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[4]};
`;

export const ButtonStyleInit = styled.button`
  display: contents;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

export const KeepAllFont = styled(Font.Medium)`
  word-break: keep-all;
`;

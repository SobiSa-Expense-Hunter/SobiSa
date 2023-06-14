import styled, { css } from 'styled-components';

import * as Font from '@/styles/font';

export const ListBoxSizeCss = css`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  gap: 16px;
  margin: 0;

  width: 310px;
  height: 151px;
`;

export const StyledListContainer = styled.div<{ select?: boolean }>`
  ${ListBoxSizeCss}

  cursor: pointer;
  &:hover {
    background: #fff5e6;
  }

  border-width: 1px 0px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.mainColor};
`;

export const Scroll = styled.div`
  flex: auto;
  height: calc(100% - 15vh - 45px);
  @supports (height: 10svh) {
    height: calc(100% - 15svh - 45px);
  }
  overflow-y: auto;
  padding-bottom: 50px;
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

export const TopBtn = styled.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  transform: translate(-50%, -100%);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: inherit;
  justify-content: flex-end;
  min-width: 310px;
`;

/* LIST-BOX */
export const TextItem = styled.div`
  flex: 1;
  display: grid;
  flex-direction: column;
  gap: 8px 0px;
  width: 183px;

  text-align: initial;
  white-space: nowrap;
`;

export const Title = styled(Font.Medium)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemClass = styled(Font.Small)`
  margin-top: 8px;
`;

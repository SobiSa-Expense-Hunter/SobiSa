import styled from 'styled-components';

import * as Layout from '@/components/common/layout/index';

export const AutoCmp = styled(Layout.VStack)`
  width: 100%;
  height: 1.5em;
  border: gray 1px;
  padding: 0 20px;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray[1]};
  }
`;

export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  /* 위치 보정 */
  top: -10px;
  left: -2px;

  z-index: 1;
`;

export const Absolute = styled.div`
  position: absolute;
  width: calc(100% + 4px);

  padding: 10px 0;

  background-color: white;
  border: solid ${({ theme }) => theme.colors.mainColor};
  border-width: 0 2px 2px 2px;
  border-radius: 0 0 10px 10px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border: 2px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 8px;
  max-width: 310px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const SearchInputBox = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  border-radius: 6px 0 0 6px;
`;

export const SearchEnterInput = styled.input`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 6px 0 0 6px;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 210px;
  color: ${({ theme }) => theme.colors.mainColor};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.gray[3]};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.gray[3]};
  }

  /*INPUT-FONT */
  font-family: 'Pretendard Variable';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.022em;
`;

export const SearchButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

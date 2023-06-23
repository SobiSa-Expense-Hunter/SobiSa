import styled from 'styled-components';

import * as Layout from '@/components/common/layout/index';

export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Absolute = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px 0;

  border-width: 0 2px 2px 2px;
  border-radius: 0 0 10px 10px;

  background-color: white;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const SearchInputBox = styled.div<{ focus: boolean; search: string }>`
  width: 80%;
  height: 100%;

  border: 2px solid ${({ theme, focus }) => (focus ? 'none' : theme.colors.mainColor)};
  border-right-style: none;
  border-radius: ${({ focus, search }) =>
    search && focus ? '8px 0px 0px 0px' : '8px 0px 0px 8px'};

  box-shadow: ${({ focus }) => (focus ? `0px 4px 10px  rgba(0, 0, 0, 0.1)` : 'none')};

  z-index: ${({ focus }) => (focus ? '1' : '0')};
`;

export const SearchEnterInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 210px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border: none;
  border-radius: 6px 0 0 6px;
  outline: none;

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
  cursor: pointer;

  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  width: 20%;
  height: 100%;
  padding: 0;

  border: none;
  border-radius: 0 5px 5px 0;
  border-radius: 0px 8px 8px 0px;

  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const AutoCmp = styled(Layout.VStack)`
  width: 100%;
  height: 100%;
  max-height: 2em;
  padding: 10px 10px 10px 17px;

  border: gray 1px;
  background: white;

  :hover {
    cursor: pointer;
    border-left: 3px solid ${({ theme }) => theme.colors.mainColor};
    background-color: #ffe7c2;
  }
`;

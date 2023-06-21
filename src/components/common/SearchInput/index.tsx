/* eslint-disable consistent-return */
import { useState, useRef, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { NextRouter, useRouter } from 'next/router';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { MagnifyingGlassIcon } from '@/assets/Icons';
import * as Layout from '@/components/common/layout/index';
import NoticeModal from '@/components/modal/NoticeModal';
import useAutoCmp from '@/hooks/useAutoCmp';
import useNoticeModal from '@/hooks/useNoticeModal';
import * as Font from '@/styles/font';
import detectMobileDevice from '@/utils/checkMobileDevice';

function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState((router.query.search as string) || '');
  const [isFocus, setIsFocus] = useState(false);
  const { modalState, dispatchModalState } = useNoticeModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const { autoCmpList } = useAutoCmp(search);

  useEffect(() => {
    const isMobile = detectMobileDevice(window.navigator.userAgent);
    if (isMobile || router.asPath === '/') return;
    inputRef.current?.focus();
  }, [router.asPath]);

  const onSearch = (event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
    try {
      if (event.type === 'click' || ('key' in event && event.key === 'Enter'))
        searchParam(router, checkSearchWord(search));
    } catch (error) {
      if (!(error instanceof Error)) return;
      setSearch('');
      dispatchModalState({ type: 'SHOW', message: error.message });
    }
  };
  return (
    <SearchInputContainer>
      <SearchInputBox>
        <SearchEnterInput
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={onSearch}
          ref={inputRef}
        />
        {isFocus && search && autoCmpList.length > 1 && (
          <AutoCmpContainer autoCmpList={autoCmpList} setSearch={setSearch} />
        )}
      </SearchInputBox>
      <SearchButton type='button' onClick={onSearch}>
        <MagnifyingGlassIcon />
      </SearchButton>

      {modalState.show && (
        <NoticeModal
          onClose={() => dispatchModalState({ type: 'HIDE' })}
          message={modalState.message}
        />
      )}
    </SearchInputContainer>
  );
}

interface AutoCmpProps {
  autoCmpList: string[];
  setSearch: Dispatch<SetStateAction<string>>;
}

function AutoCmpContainer({ autoCmpList, setSearch }: AutoCmpProps) {
  return (
    <Relative>
      <Absolute>
        {autoCmpList.map(autoCmp => {
          return (
            <AutoCmp justifyContent='center' key={uuid()} onMouseDown={() => setSearch(autoCmp)}>
              <Font.Medium>{autoCmp}</Font.Medium>
            </AutoCmp>
          );
        })}
      </Absolute>
    </Relative>
  );
}

function searchParam(thisRouter: NextRouter, searchText: string) {
  thisRouter.push({ pathname: '/list', query: { search: searchText } });
}

function checkSearchWord(search: string) {
  const isWhitespaceOnly = /^\s*$/.test(search);
  const isSpecialCharIncluded = /[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]/.test(search);
  if (!search || isWhitespaceOnly) throw new Error('검색어를 입력해주세요.');
  if (isSpecialCharIncluded) throw new Error('특수문자를 제외하고 입력해주세요.');
  return search.trim();
}

const AutoCmp = styled(Layout.VStack)`
  width: 100%;
  height: 1.5em;
  border: gray 1px;
  padding: 0 20px;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray[1]};
  }
`;

const Relative = styled.div`
  position: relative;
  width: 100%;

  /* 위치 보정 */
  top: -10px;
  left: -2px;

  z-index: 1;
`;

const Absolute = styled.div`
  position: absolute;
  width: calc(100% + 4px);

  padding: 10px 0;

  background-color: white;
  border: solid ${({ theme }) => theme.colors.mainColor};
  border-width: 0 2px 2px 2px;
  border-radius: 0 0 10px 10px;
`;

const SearchInputContainer = styled.div`
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

const SearchInputBox = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  border-radius: 6px 0 0 6px;
`;

const SearchEnterInput = styled.input`
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

const SearchButton = styled.button`
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

export default SearchInput;

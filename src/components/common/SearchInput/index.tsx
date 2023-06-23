import { useState, useRef, useEffect } from 'react';

import { NextRouter, useRouter } from 'next/router';
import styled from 'styled-components';

import { MagnifyingGlassIcon } from '@/assets/Icons';
import NoticeModal from '@/components/modal/NoticeModal';
import useNoticeModal from '@/hooks/useNoticeModal';
import detectMobileDevice from '@/utils/checkMobileDivice';

function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState((router.query.search as string) || '');
  const { modalState, dispatchModalState } = useNoticeModal();
  const autoFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isMobile = detectMobileDevice(window.navigator.userAgent);
    if (isMobile || router.asPath === '/') return;
    autoFocusRef.current?.focus();
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
          aria-label='search-input'
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={onSearch}
          ref={autoFocusRef}
        />
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

const SearchInputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
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

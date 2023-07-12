/* eslint-disable consistent-return */
import { useState, useRef, useEffect } from 'react';

import { NextRouter, useRouter } from 'next/router';

import { MagnifyingGlassIcon } from '@/assets/Icons';
import * as Style from '@/components/common/SearchInput/style';
import * as Layout from '@/components/common/layout/index';
import NoticeModal from '@/components/modal/NoticeModal';
import useAutoCmp from '@/hooks/useAutoCmp';
import useNoticeModal from '@/hooks/useNoticeModal';
import detectMobileDevice from '@/utils/checkMobileDevice';

import AutoCmpContainer from './AutoCmpContainer';

function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState((router.query.search as string) || '');
  const [isFocus, setIsFocus] = useState(false);
  const { modalState, dispatchModalState } = useNoticeModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const { autoCmpList, state } = useAutoCmp(search);

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
    <Layout.HStack width='100%' height='60px' justifyContent='space-between' maxWidth='310px'>
      <Style.SearchInputBox focus={isFocus} search={search}>
        <Style.SearchEnterInput
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={onSearch}
          ref={inputRef}
          aria-label='search-input'
        />
        {isFocus && search && (
          <AutoCmpContainer autoCmpList={autoCmpList} setSearch={setSearch} state={state} />
        )}
      </Style.SearchInputBox>

      <Style.SearchButton type='button' onClick={onSearch}>
        <MagnifyingGlassIcon />
      </Style.SearchButton>

      {modalState.isShow && (
        <NoticeModal
          onClose={() => dispatchModalState({ type: 'HIDE' })}
          message={modalState.message}
        />
      )}
    </Layout.HStack>
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

export default SearchInput;

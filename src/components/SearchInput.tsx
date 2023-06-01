import React, { useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import { MagnifyingGlassIcon } from '@/assets/Icons';

import NoticeModal from './modal/NoticeModal';

function SearchInput() {
  const [search, setSearch] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  const checkSearchWord = () => {
    if (!search) {
      throw new Error('검색어를 입력해주세요');
    }
  };

  const handleSearchKeyDownEvent = (event: React.KeyboardEvent<HTMLElement>) => {
    try {
      if (event.key === 'Enter') {
        checkSearchWord();
        router.push({ pathname: '/list', query: { search } });
      }
    } catch (error) {
      setShowModal(true);
    }
  };

  const handleSearchClickEvent = () => {
    try {
      checkSearchWord();
      router.push({ pathname: '/list', query: { search } });
    } catch (error) {
      setShowModal(true);
    }
  };

  return (
    <SearchInputContainer>
      <SearchInputBox>
        <SearchEnterInput
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleSearchKeyDownEvent}
        />
      </SearchInputBox>
      <SearchButton type='button' onClick={handleSearchClickEvent}>
        <MagnifyingGlassIcon />
      </SearchButton>
      {showModal && (
        <NoticeModal onClose={() => setShowModal(false)} message='검색어를 입력해주세요!' />
      )}
    </SearchInputContainer>
  );
}
export default SearchInput;

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

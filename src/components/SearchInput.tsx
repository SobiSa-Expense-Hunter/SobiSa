import React, { useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import SearchIcon from '@/assets/SearchIcon';

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
        router.push('/list');
      }
    } catch (error) {
      setShowModal(true);
    }
  };

  const handleSearchClickEvent = () => {
    try {
      checkSearchWord();
      router.push('/list');
    } catch (error) {
      setShowModal(true);
    }
  };

  return (
    <SearchInputContainer>
      <SearchInputBox>
        <SearchEnterInput
          type='text'
          placeholder='Search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleSearchKeyDownEvent}
        />
      </SearchInputBox>
      <SearchButton type='button' onClick={handleSearchClickEvent}>
        <SearchIcon />
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
  jusify-content: space-between;
  background-color: white;
`;
const SearchInputBox = styled.div`
  width: 80%;
  height: 100%;
`;
const SearchEnterInput = styled.input`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 210px;
  color: ${({ theme }) => theme.colors.mainColor};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.mainColor};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.mainColor};
  }
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

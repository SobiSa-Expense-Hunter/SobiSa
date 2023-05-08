import React, { useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import SearchIcon from '@/assets/SearchIcon';

import SearchErrorModal from './modal/SearchErrorModal';

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
        router.push('/');
      }
    } catch (error) {
      setShowModal(true);
    }
  };

  const handleSearchClickEvent = () => {
    try {
      checkSearchWord();
      router.push('/');
    } catch (error) {
      setShowModal(true);
    }
  };

  return (
    <SearchInputContainer>
      <SearchInputBox>
        <SearchEnterInput
          type='text'
          placeholder='지금 고민하는 그 물건'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleSearchKeyDownEvent}
        />
      </SearchInputBox>
      <SearchButton type='button' onClick={handleSearchClickEvent}>
        <SearchIcon />
      </SearchButton>
      {showModal && <SearchErrorModal onClose={() => setShowModal(false)} />}
    </SearchInputContainer>
  );
}
export default SearchInput;

const SearchInputContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 3px solid #ff9d02;
  border-radius: 8px;
  max-height: 60px;
  jusify-content: space-between;
`;
const SearchInputBox = styled.div`
  width: 80%;
  height: 100%;
  padding: 20px;
`;
const SearchEnterInput = styled.input`
  outline: none;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  color: #ff9d02;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ff9d02;
  }
  :-ms-input-placeholder {
    color: #ff9d02;
  }
`;
const SearchButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  padding: 20px 0;
  background-color: #ff9d02;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

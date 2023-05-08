import React from 'react';

import styled from 'styled-components';

import SearchInput from '@/components/SearchInput';

function Search() {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
}
export default Search;

const Container = styled.div`
  max-width: 375px;
`;

import React from 'react';

import styled from 'styled-components';

import SearchInput from '@/components/SearchInput';

function Home() {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
}
export default Home;

const Container = styled.div`
  max-width: 375px;
`;

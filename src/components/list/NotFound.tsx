/* eslint-disable import/no-cycle */
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import * as Buttons from '@/components/common/buttons';
import MarginBox from '@/components/common/marginBox';
import * as Font from '@/styles/font';

function NotFound() {
  return (
    <NotFoundWrapper>
      <Image src='/graphics/notFound.gif' alt='not Found' height={220} width={220} unoptimized />
      <MarginBox margin='32px' />
      <Font.MediumOrange>정말 그걸 검색하신 게 맞나요? </Font.MediumOrange>
      <MarginBox margin='16px' />
      <Font.Small>검색하신 물건과 관련된 결과가 하나도 없습니다! </Font.Small>
      <Font.Small>오타를 내신 건 아닌가요?</Font.Small>
      <MarginBox margin='87px' />
      <Link href='/' replace>
        <Buttons.BottomButton>이전으로</Buttons.BottomButton>
      </Link>
      <MarginBox margin='66px' />
    </NotFoundWrapper>
  );
}

export default NotFound;

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

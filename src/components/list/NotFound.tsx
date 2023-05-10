/* eslint-disable import/no-cycle */
import React from 'react';

import styled from 'styled-components';

import { ItemImage } from '@/assets';
import { Indicator01 } from '@/assets/indicator';
import * as Buttons from '@/components/common/buttons';
import { MarginBox } from '@/pages/list';
import * as Font from '@/styles/font';

function NotFound() {
  return (
    <NotFoundWrapper>
      <img src='graphics/mockupImg.png' alt='mockup img' />
      <MarginBox margin='32px' />
      <Font.MediumOrange>정말 그걸 검색하신 게 맞나요? </Font.MediumOrange>
      <MarginBox margin='16px' />
      <Font.Small>오타를 내신건 아닌지.. </Font.Small>
      <Font.Small>어쩌구 다시 검색해보실래요?</Font.Small>
      <MarginBox margin='87px' />
      <Buttons.BottomButton>STATIC</Buttons.BottomButton>
      <MarginBox margin='66px' />
      <Indicator01 />
    </NotFoundWrapper>
  );
}

export default NotFound;

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import React from 'react';

import styled from 'styled-components';

import * as Icon from '@/assets/Icons';
import { MainImage } from '@/assets/Images';
import { Indicator01 } from '@/assets/Indicators';
import SearchInput from '@/components/SearchInput';
import MarginBox from '@/components/common/marginBox';
import FacebookButton from '@/components/common/share/FacebookButton';
import KakaoButton from '@/components/common/share/KakaoButton';
import LinkButton from '@/components/common/share/LinkButton';
import TwitterButton from '@/components/common/share/TwitterButton';
import { sharedMessage } from '@/constant';
import * as Font from '@/styles/font';

function Home() {
  const { title = '', text = '', url = '' } = sharedMessage;
  return (
    <Container>
      <Font.Medium>지금 뭘 사고 싶나요?</Font.Medium>
      <Font.Large>소비사와 같이 고민해 봐요!</Font.Large>
      <ImageBox>
        <MainImage />
      </ImageBox>
      <SearchInput />
      <LinkBox>
        <FacebookButton pageUrl={url} />
        <TwitterButton pageUrl={url} sendText={text} />
        <KakaoButton title={title} description={text} webUrl={url} />
        <LinkButton pageUrl={url} />
      </LinkBox>
    </Container>
  );
}
export default Home;

const ImageBox = styled.div`
  margin: 16px 0px;
`;

const LinkBox = styled.div`
  margin-top: 66px;
  display: flex;
  gap: 8px;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

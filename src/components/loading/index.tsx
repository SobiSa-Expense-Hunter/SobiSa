/* eslint-disable import/no-cycle */
import styled from 'styled-components';

import { Centering } from '../layout/AppLayout';
import { MarginBox } from '@/pages/list';
import * as Font from '@/styles/font';

function Loading() {
  return (
    <BackgroundColor>
      <MarginBox margin='166px' />
      <ImageContainer>
        <img src='graphics/sobisaLoading.png' alt='소비사 로딩 이미지' />
      </ImageContainer>
      <MarginBox margin='66px' />
      <LoadingBarOuter />
      <MarginBox margin='32px' />
      <Font.Large>소비 사냥하러 가는 중..</Font.Large>
      <Font.Small>앱을 종료하지 마시고 잠시만 기다려주세요.</Font.Small>
      <MarginBox margin='178px' />
      <Font.Medium>SOBISA!</Font.Medium>
    </BackgroundColor>
  );
}

export default Loading;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
  }
`;

const LoadingBarOuter = styled.div`
  width: 264px;
  height: 10px;
  top: 472px;
  left: calc(50% - 264px / 2 - 0.5px);
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.05));
  background: #ffffff;
  border-radius: 16px;
`;

const BackgroundColor = styled(Centering)`
  background: #fff8b4;
`;

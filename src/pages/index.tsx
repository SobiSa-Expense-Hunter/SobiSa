import { useEffect, useState, useRef } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { MainImage } from '@/assets/Images';
import SearchInput from '@/components/SearchInput';
import * as Layout from '@/components/common/layout';
import FacebookButton from '@/components/common/share/FacebookButton';
import KakaoButton from '@/components/common/share/KakaoButton';
import LinkButton from '@/components/common/share/LinkButton';
import TwitterButton from '@/components/common/share/TwitterButton';
import { sharedMessage } from '@/constant';
import useLocalStorage from '@/hooks/useLocalStorage';
import * as Font from '@/styles/font';

const OnboardingDimmed = dynamic(() => import('@/components/search/OnboardingDimmed'));

function Home() {
  const { title = '', text = '', url = '' } = sharedMessage;
  const [isVisted, setIsVisted] = useLocalStorage('visited', '');
  const [isDimmedShown, setIsDimmedShown] = useLocalStorage('isDimmedShown', 'false');
  const searchInputRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const leftOffset = searchInputRef?.current?.offsetLeft || 0;
  const topOffset = searchInputRef?.current?.offsetTop || 0;
  const searchWidth = searchInputRef?.current?.offsetWidth || 0;
  const searchHeight = searchInputRef?.current?.offsetHeight || 0;
  const widthPadding = 15;

  const searchInputOffset: SearchInputOffset = {
    x: searchWidth > 375 ? (searchWidth - 310) / 2 + widthPadding : leftOffset + widthPadding,
    y: topOffset,
    width: searchWidth > 310 ? 310 : searchWidth,
    height: searchHeight,
  };

  if (isVisted === '') {
    setIsVisted(new Date().toDateString());
    router.push('/about');
  }

  return (
    <Layout.VStack margin='20px 0 0' width='100%' alignItems='center'>
      {isDimmedShown === 'false' && <OnboardingDimmed searchInputPosition={searchInputOffset} />}
      <Font.Medium>지금 뭘 사고 싶나요?</Font.Medium>
      <Font.Large>소비사와 같이 고민해 봐요!</Font.Large>
      <Layout.Box margin='16px 0px'>
        <MainImage width={220} height={220} />
      </Layout.Box>
      <Layout.VStack ref={searchInputRef} width='100%' alignItems='center'>
        <SearchInput />
      </Layout.VStack>
      <Layout.HStack margin='66px 0 0' gap='8px'>
        <FacebookButton pageUrl={url} />
        <TwitterButton pageUrl={url} sendText={text} />
        <KakaoButton title={title} description={text} webUrl={url} />
        <LinkButton pageUrl={url} />
      </Layout.HStack>
    </Layout.VStack>
  );
}
export default Home;

export interface SearchInputOffset {
  x: number;
  y: number;
  width: number;
  height: number;
}

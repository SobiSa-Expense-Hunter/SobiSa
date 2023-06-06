/* eslint-disable import/no-cycle */
import { useEffect, useState, useRef, RefObject } from 'react';

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

export const HAS_EXPERIENCE_ONBOARDING = 'experienceOnboarding';
export const IS_VISITED = 'visited';
export const AFTER_ABOUT = 'afterAbout';

export interface SearchInputOffset {
  x: number;
  y: number;
  width: number;
  height: number;
}

function Home() {
  const { title = '', text = '', url = '' } = sharedMessage;

  const [isVisted, setIsVisted] = useLocalStorage(IS_VISITED, '');
  const [experienceOnboarding, setExperienceOnboarding] = useLocalStorage(
    HAS_EXPERIENCE_ONBOARDING,
    '',
  );
  const [searchInputOffset, setsearchInputOffset] = useState<SearchInputOffset>();

  const searchInputRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!searchInputRef.current) return;
    setsearchInputOffset(calculatePositionOfSearchInput(searchInputRef));
  }, [searchInputRef]);

  if (isVisted === '') {
    setIsVisted(new Date().toDateString());
    router.push('/about');
  }

  return (
    <Layout.VStack margin='20px 0 0' width='100%' alignItems='center'>
      {experienceOnboarding === AFTER_ABOUT && searchInputOffset && (
        <OnboardingDimmed
          searchInputPosition={searchInputOffset}
          setLocalStorage={setExperienceOnboarding}
        />
      )}
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

function calculatePositionOfSearchInput(ref: RefObject<HTMLDivElement>): SearchInputOffset {
  const searchBox = {
    leftOffset: ref?.current?.offsetLeft || 0,
    topOffset: ref?.current?.offsetTop || 0,
    width: ref?.current?.offsetWidth || 0,
    height: ref?.current?.offsetHeight || 0,
    leftPadding: 16,
    maxWidth: 310,
  };

  const BackgroundDefaultWidth = 375;

  const calculatePosition: SearchInputOffset = {
    x:
      searchBox.width > BackgroundDefaultWidth
        ? (searchBox.width - searchBox.maxWidth) / 2 + searchBox.leftPadding
        : searchBox.leftOffset + searchBox.leftPadding,
    y: searchBox.topOffset,
    width: searchBox.width > searchBox.maxWidth ? searchBox.maxWidth : searchBox.width,
    height: searchBox.height,
  };

  return calculatePosition;
}

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-cycle */
import { useEffect, useState, useRef, RefObject } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { MainImage } from '@/assets/Images';
import SearchInput from '@/components/SearchInput';
import * as Layout from '@/components/common/layout';
import FacebookButton from '@/components/common/share/FacebookButton';
import KakaoButton from '@/components/common/share/KakaoButton';
import LinkButton from '@/components/common/share/LinkButton';
import TwitterButton from '@/components/common/share/TwitterButton';
import { sharedMessage } from '@/constant';
import { ONBOARDING, VISITED } from '@/constant/localstorage';
import useLocalStorage from '@/hooks/useLocalStorage';
import * as Font from '@/styles/font';

const Onboarding = dynamic(() => import('@/components/search/Onboarding'));

export interface SearchInputPositionAndSize {
  x: number;
  y: number;
  width: number;
  height: number;
}

function Home() {
  const { title = '', text = '', url = '' } = sharedMessage;

  const [isVisted, _] = useLocalStorage(VISITED.key, VISITED.status.INITIAL);
  const [didWatchOnboarding, setDidWatchOnboarding] = useLocalStorage(
    ONBOARDING.key,
    ONBOARDING.status.INITIAL,
  );
  const [searchInputPositionAndSize, setSearchInputPositionAndSize] =
    useState<SearchInputPositionAndSize>();

  const searchInputRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!searchInputRef.current) return;
    setSearchInputPositionAndSize(calculatePositionAndSizeOfSearchInput(searchInputRef));
  }, [searchInputRef]);

  if (isVisted === VISITED.status.INITIAL) router.push('/about');

  return (
    <ScrollY width='100%' padding='30px 0 30px' alignItems='center' style={{ overflow: 'auto' }}>
      {didWatchOnboarding === ONBOARDING.status.NOT_WATCHED && searchInputPositionAndSize && (
        <Onboarding
          searchInputInfo={searchInputPositionAndSize}
          setDidWatchOnboarding={setDidWatchOnboarding}
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
      <Layout.HStack margin='10vh 0 ' gap='8px'>
        <FacebookButton pageUrl={url} />
        <TwitterButton pageUrl={url} sendText={text} />
        <KakaoButton webUrl={url} />
        <LinkButton pageUrl={url} />
      </Layout.HStack>
    </ScrollY>
  );
}
export default Home;

function calculatePositionAndSizeOfSearchInput(
  searchInputRef: RefObject<HTMLDivElement>,
): SearchInputPositionAndSize {
  const searchInput = {
    leftOffset: searchInputRef?.current?.offsetLeft || 0,
    topOffset: searchInputRef?.current?.offsetTop || 0,
    wrapperWidth: searchInputRef?.current?.offsetWidth || 0,
    height: searchInputRef?.current?.offsetHeight || 0,
    maxWidth: 310,
  };

  const whiteBackgroundWidthWhenTabletSize = 375;
  const backgroundPaddiing = 16;

  function calculatXOffset() {
    // 뷰포트 너비가 375 이하인 경우
    if (searchInput.wrapperWidth < searchInput.maxWidth) return searchInput.leftOffset;

    //  뷰포트 너비가 768 이상인 경우 (태블릿 이상)
    if (searchInput.wrapperWidth > whiteBackgroundWidthWhenTabletSize)
      return getSearchInputLeftMargin() + backgroundPaddiing;

    return searchInput.leftOffset + getSearchInputLeftMargin();

    function getSearchInputLeftMargin() {
      return (searchInput.wrapperWidth - searchInput.maxWidth) / 2;
    }
  }

  const calculatePosition: SearchInputPositionAndSize = {
    x: calculatXOffset(),
    y: searchInput.topOffset,
    width:
      searchInput.wrapperWidth > searchInput.maxWidth
        ? searchInput.maxWidth
        : searchInput.wrapperWidth,
    height: searchInput.height,
  };

  return calculatePosition;
}

const ScrollY = styled(Layout.VStack)`
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[2]};
  }
`;

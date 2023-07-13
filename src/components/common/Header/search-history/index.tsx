/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';

import localForage from 'localforage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

import * as Icon from '@/assets/Icons';
import Portal from '@/components/Portal';
import * as Style from '@/components/common/Header/style';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import Card from '@/components/event/Card';
import * as Font from '@/styles/font';

import SearchHistory from './SearchHistoryBox';
import useDataState from './useDataState';
import type { UserSearchHistory } from '@/types/product';
import type { Cycle } from 'framer-motion';

// TODO: Alert창 모달 또는 토스트 팝업 디자인 적용
function SearchHistoryList({ toggleSideBar }: { toggleSideBar: Cycle }) {
  const [searchHistories, setSearchHistory] = useState<UserSearchHistory[]>([]);
  const [dataState, dispatchDataState] = useDataState();
  const router = useRouter();

  useEffect(() => {
    dispatchDataState('IS_LOADING');
    getAllItems()
      .then(res => setSearchHistory(res as UserSearchHistory[]))
      .then(() => dispatchDataState('IS_SUCCESS'));
  }, []);

  const selectHistory = (e: React.MouseEvent, history: UserSearchHistory) => {
    if (e.defaultPrevented) return;
    window.history.pushState(history, '', '/history');
    router.push('/history');
  };

  const deleteIndividual = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    localForage
      .removeItem(title)
      .then(() => {
        setSearchHistory(searchHistories.filter(history => history.product.title !== title));
        alert(`${title}이/가 삭제되었어요.`);
      })
      .catch(err => console.log(err));
  };

  const deleteAll = () =>
    localForage
      .clear()
      .then(() => {
        setSearchHistory([]);
        alert(`검색 기록이 초기화 되었어요.`);
      })
      .catch(err => console.log(err));

  return (
    <Portal>
      <Layout.VStack width='100%' height='100%' alignItems='center'>
        <Style.Absolute width='100%' height='100%' alignItems='center'>
          <Layout.VStack width='100%' height='100%' alignItems='flex-end'>
            <Style.ListBox
              variants={wrapperVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <Style.SearchHeader
                width='100%'
                alignItems='center'
                justifyContent='flex-start'
                margin='0 0 13px 0'
              >
                <Font.Large style={{ flex: 1 }}>이전 검색 내역</Font.Large>
                <Style.Button
                  onClick={() => toggleSideBar()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Icon.Delete width={10} height={10} />
                </Style.Button>
              </Style.SearchHeader>

              <Layout.VStack alignItems='center' justifyContent='flex-start'>
                {dataState.isSuccess &&
                  searchHistories.map(history => (
                    <SearchHistory
                      searchHistory={history}
                      key={uuid()}
                      onDelete={deleteIndividual}
                      onClick={selectHistory}
                    />
                  ))}

                {dataState.isLoading && <Font.Medium>로딩중..</Font.Medium>}

                {(searchHistories.length === 0 || dataState.isError) && (
                  <Font.Medium>검색 내역이 없어요</Font.Medium>
                )}
              </Layout.VStack>

              <Buttons.Button onClick={deleteAll}>전체 삭제</Buttons.Button>
              {/* <Font.Medium>ios의 경우 검색 기록은 최대 7일간 보관돼요.</Font.Medium>
              <Font.Medium>보관 기록은 최대 8개까지 볼 수 있어요.</Font.Medium> */}
              <Style.Href
                href='https://docs.google.com/forms/d/e/1FAIpQLSdTY6z7VlkzIfCBuZdNxEndCflzRoXr4w14CPYvknfNYKQCdQ/viewform'
                target='_blank'
                rel='noreferrer noreferrer'
              >
                <Font.Medium>소비사의 개선점이 있다면 알려주세요!</Font.Medium>
              </Style.Href>

              <Style.UserFormHref padding='20px 32px' width='100%' height='auto' gap='12px'>
                <Layout.HStack width='100%'>
                  <Layout.VStack
                    alignItems='flex-start'
                    justifyContent='center'
                    width='auto'
                    style={{ flex: 'none' }}
                  >
                    <Style.TagRoundOrang padding='0px 8px' margin='0 0 8px'>
                      <Font.SmallOrange>수정제의</Font.SmallOrange>
                    </Style.TagRoundOrang>
                    <Font.Medium>소비사 서비스 개선을 도와주세요!</Font.Medium>
                  </Layout.VStack>
                  <Layout.VStack alignItems='flex-end' width='100%' margin='-12px -12px 0 0'>
                    <Layout.Box
                      width='100%'
                      height='100%'
                      maxWidth='63px'
                      maxHeight='70px'
                      position='absolute'
                    >
                      <Image
                        src='assets/image/search-input/sobisa-with-sunglass-and-hello.png'
                        fill
                        alt='sobisa-with-sunglass-and-hello'
                        style={{ objectFit: 'scale-down' }}
                      />
                    </Layout.Box>
                  </Layout.VStack>
                </Layout.HStack>
                <Layout.HStack
                  width='100%'
                  alignItems='center'
                  justifyContent='center'
                  maxHeight='26px'
                >
                  <Font.Small style={{ flex: '1' }}>개선점 알리러 가기</Font.Small>
                  <Buttons.LightGrayTag>바로가기</Buttons.LightGrayTag>
                </Layout.HStack>
              </Style.UserFormHref>
            </Style.ListBox>
          </Layout.VStack>
        </Style.Absolute>
      </Layout.VStack>

      <Style.Background />
    </Portal>
  );
}

async function getAllItems() {
  const items = await localForage
    .keys()
    .then(keys =>
      keys.map(key => localForage.getItem(key).then(data => data as UserSearchHistory)),
    );
  return Promise.all(items);
}

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.4, ease: 'easeIn' },
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.4, staggerChildren: 0.1, ease: 'easeIn' },
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

export default SearchHistoryList;

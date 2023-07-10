/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';

import localForage from 'localforage';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

import * as Icon from '@/assets/Icons';
import Portal from '@/components/Portal';
import * as Style from '@/components/common/Header/style';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

import type { UserSearchHistory } from '@/types/product';
import type { Cycle } from 'framer-motion';
import SearchHistory from './SearchHistoryBox';
import useDataState from './useDataState';

// TODO: Alert창 모달 또는 토스트 팝업 디자인 적용
function SearchHistoryList({ toggleSideBar }: { toggleSideBar: Cycle }) {
  const [searchHistorys, setSearchHistory] = useState<UserSearchHistory[]>([]);
  const [dataState, dispatchDataState] = useDataState();
  const router = useRouter();

  useEffect(() => {
    dispatchDataState('IS_LOADING');
    getAllItems()
      .then(res => setSearchHistory(res as UserSearchHistory[]))
      .then(() => dispatchDataState('IS_SUCCESS'));
  }, []);

  const deleteIndividual = (title: string) => {
    localForage
      .removeItem(title)
      .then(() => {
        setSearchHistory(searchHistorys.filter(history => history.product.title !== title));
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

  const selectHistory = (history: UserSearchHistory) => {
    window.history.pushState(history, '', '/history');
    router.push('/history');
  };
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
                margin='0 0 10px 0'
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
              <Style.Line />

              <Layout.VStack alignItems='center' justifyContent='flex-start'>
                {dataState.isSuccess &&
                  searchHistorys.map(history => (
                    <SearchHistory
                      searchHistory={history}
                      key={uuid()}
                      onDelete={deleteIndividual}
                      onClick={selectHistory}
                    />
                  ))}

                {dataState.isLoading && <Font.Medium>로딩중..</Font.Medium>}

                {(searchHistorys.length === 0 || dataState.isError) && (
                  <Font.Medium>검색 내역이 없어요</Font.Medium>
                )}
              </Layout.VStack>

              <Buttons.Button onClick={deleteAll}>전체 삭제</Buttons.Button>
              <Font.Medium>ios의 경우 검색 기록은 최대 7일간 보관돼요.</Font.Medium>
              <Font.Medium>보관 기록은 최대 8개까지 볼 수 있어요.</Font.Medium>
              <Style.Href
                href='https://docs.google.com/forms/d/e/1FAIpQLSdTY6z7VlkzIfCBuZdNxEndCflzRoXr4w14CPYvknfNYKQCdQ/viewform'
                target='_blank'
                rel='noreferrer noreferrer'
              >
                <Font.Medium>소비사의 개선점이 있다면 알려주세요!</Font.Medium>
              </Style.Href>
            </Style.ListBox>
          </Layout.VStack>
        </Style.Absolute>
      </Layout.VStack>

      <Style.Background />
    </Portal>
  );
}

async function getAllItems() {
  /**
   * !Description
   * /result에 직접 접근 시 indexed db key에 빈 값이 설정될 가능성이 있기 때문에
   * 해당 데이터를 get을 하며 빈 값을 삭제하는 로직 추가
   */
  await localForage.removeItem('');
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

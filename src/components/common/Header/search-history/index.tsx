/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useReducer } from 'react';

import localForage from 'localforage';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

import Portal from '@/components/Portal';
import Toast from '@/components/common/Toast';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import LoadingSpinner from '@/components/list/LoadingSpinner';
import * as Font from '@/styles/font';
import isDataEmpty from '@/utils/isDataEmpty';

import HistoryHeader from './Header';
import SearchHistory from './SearchHistoryBox';
import SearchHistoryNoticeTooltip from './Tooltip';
import UserResearchFormCard from './UserResearchFormCard';
import * as Constants from './constants';
import {
  dataStateReducer,
  historyToastReducer,
  initDataState,
  initHistoryToastState,
} from './reducer';
import * as Style from './style';
import type { UserSearchHistory } from '@/types/product';
import type { Cycle } from 'framer-motion';

function SearchHistoryList({ toggleSideBar }: { toggleSideBar: Cycle }) {
  const [searchHistories, setSearchHistory] = useState<UserSearchHistory[]>([]);
  const [dataState, dispatchDataState] = useReducer(dataStateReducer, initDataState);
  const [isNoticeTooltipShow, setIsNoticeTooltipShow] = useState(false);
  const [historyToastState, dispatchHistoryToastState] = useReducer(
    historyToastReducer,
    initHistoryToastState,
  );

  const router = useRouter();

  useEffect(() => {
    dispatchDataState({ type: 'IS_LOADING' });
    getAllItems()
      .then(res => setSearchHistory(res as UserSearchHistory[]))
      .then(() => dispatchDataState({ type: 'IS_SUCCESS' }))
      .catch(err => console.log(err));
  }, []);

  const selectHistory = (e: React.MouseEvent, history: UserSearchHistory) => {
    if (e.defaultPrevented) return;
    window.history.pushState(history, '', '/history');
    router.push('/history');
  };

  const deleteOneHistory = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    localForage
      .removeItem(title)
      .then(() => {
        setSearchHistory(searchHistories.filter(history => history.product.title !== title));
        dispatchHistoryToastState({ type: 'DeleteOne', productName: title });
      })
      .catch(err => console.log(err));
  };

  const deleteAllHistory = () => {
    if (searchHistories.length <= 0) return dispatchHistoryToastState({ type: 'NothingToDelete' });

    localForage
      .clear()
      .then(() => {
        setSearchHistory([]);
        dispatchHistoryToastState({ type: 'DeleteAll' });
      })
      .catch(err => console.log(err));
  };

  const openUserResearchForm = () => {
    window.open(Constants.researchFormURL, '_blank', 'noreferrer, noreferrer');
  };

  return (
    <Portal>
      <Layout.VStack width='100%' height='100%' alignItems='center'>
        <Style.Absolute
          width='100%'
          height='100%'
          alignItems='center'
          style={{ overflow: `hidden` }}
        >
          <Layout.VStack width='100%' height='100%' alignItems='flex-end'>
            <Style.ListBox
              variants={Constants.openClosedAnimationVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <HistoryHeader
                onNoticeTooltipShow={setIsNoticeTooltipShow}
                onToggleSideBar={toggleSideBar}
              />

              {isNoticeTooltipShow && <SearchHistoryNoticeTooltip />}

              <Style.YScroll alignItems='center' justifyContent='flex-start' height='100%'>
                {dataState.isSuccess &&
                  searchHistories.map(history => (
                    <SearchHistory
                      searchHistory={history}
                      key={uuid()}
                      onDelete={deleteOneHistory}
                      onClick={selectHistory}
                    />
                  ))}

                {dataState.isLoading && (
                  <Layout.VStack height='100%' justifyContent='center'>
                    <LoadingSpinner />
                  </Layout.VStack>
                )}

                {(!dataState.isLoading && isDataEmpty(searchHistories)) ||
                  (dataState.isError && (
                    <Layout.VStack height='100%' justifyContent='center'>
                      <Font.LargeOrange>검색 내역이 없어요.</Font.LargeOrange>
                    </Layout.VStack>
                  ))}
              </Style.YScroll>

              <Layout.HStack justifyContent='flex-end' width='100%' padding='20px'>
                <Buttons.Button onClick={deleteAllHistory}>모든 내역 삭제하기</Buttons.Button>
              </Layout.HStack>

              <Layout.Flex flex={1} />

              <Style.Href onClick={openUserResearchForm}>
                <UserResearchFormCard />
              </Style.Href>
            </Style.ListBox>
          </Layout.VStack>

          {historyToastState.isShow && (
            <Style.ToastBackground>
              <Toast
                msg={historyToastState.msg}
                toastHide={() => dispatchHistoryToastState({ type: 'Hide' })}
              />
            </Style.ToastBackground>
          )}
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

export default SearchHistoryList;

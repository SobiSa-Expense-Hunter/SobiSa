/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import localForage from 'localforage';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

import * as Icons from '@/assets/Icons';
import Portal from '@/components/Portal';
import * as Style from '@/components/common/Header/style';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import ToolTip from '@/components/common/tooltip';
import * as Font from '@/styles/font';

import SearchHistory from './SearchHistoryBox';
import UserResearchFormCard from './UserResearchFormCard';
import useDataState from './useDataState';
import type { UserSearchHistory } from '@/types/product';
import type { Cycle } from 'framer-motion';

// TODO: Alert창 모달 또는 토스트 팝업 디자인 적용
function SearchHistoryList({ toggleSideBar }: { toggleSideBar: Cycle }) {
  const [searchHistories, setSearchHistory] = useState<UserSearchHistory[]>([]);
  const [dataState, dispatchDataState] = useDataState();
  const [isNoticeTooltipShow, setIsNoticeTooltipShow] = useState(false);
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

  const openUserResearchForm = () => {
    const researchFormURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSdTY6z7VlkzIfCBuZdNxEndCflzRoXr4w14CPYvknfNYKQCdQ/viewform';

    window.open(researchFormURL, '_blank', 'noreferrer, noreferrer');
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
                margin='0 0 13px 0'
              >
                <Font.Large style={{ flex: 1 }}>이전 검색 내역</Font.Large>
                <Style.Button
                  onMouseOver={() => setIsNoticeTooltipShow(true)}
                  onMouseLeave={() => setIsNoticeTooltipShow(false)}
                >
                  <Icons.QuestionMark width={14} height={14} />
                </Style.Button>
                <Layout.Box width='8px' />
                <Style.Button onClick={() => toggleSideBar()} whileTap={{ scale: 0.8 }}>
                  <Icons.Delete width={10} height={10} />
                </Style.Button>
              </Style.SearchHeader>

              {isNoticeTooltipShow && (
                <Layout.Box position='relative' width='100%' style={{ top: `-5px` }}>
                  <Layout.Box position='absolute' width='100%'>
                    <Style.ResponsivePosition
                      alignItems='flex-end'
                      justifyContent='space-between'
                      width='100%'
                    >
                      <ToolTip arrowAlign='right' arrowPosition='top'>
                        검색 기록은 최대 7일간 보관돼요. (ios 기준) <br />
                        검색 기록은 최대 8개까지 볼 수 있어요.
                      </ToolTip>
                    </Style.ResponsivePosition>
                  </Layout.Box>
                </Layout.Box>
              )}

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

              <Layout.HStack justifyContent='flex-end' width='100%' padding='20px'>
                <Buttons.Button onClick={deleteAll}>모든 내역 삭제하기</Buttons.Button>
              </Layout.HStack>
              <Layout.Flex flex={1} />
              <Style.Href onClick={openUserResearchForm}>
                <UserResearchFormCard />
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

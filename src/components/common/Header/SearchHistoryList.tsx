import { useEffect, useState } from 'react';

import localForage from 'localforage';
import { v4 as uuid } from 'uuid';

import * as Icon from '@/assets/Icons';
import Portal from '@/components/Portal';
import * as Style from '@/components/common/Header/style';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';
import { UserSearchHistory } from '@/types/product';

import SearchHistory from './SearchHistoryBox';
import type { Cycle } from 'framer-motion';

// TODO: Alert창 모달 또는 토스트 팝업 디자인 적용
function SearchHistoryList({ toggleSideBar }: { toggleSideBar: Cycle }) {
  const [searchHistorys, setSearchHistory] = useState<UserSearchHistory[]>([]);

  useEffect(() => {
    getAllItems()
      .then(res => setSearchHistory(res as UserSearchHistory[]))
      .catch(err => {
        console.log(err);
        alert('검색 기록을 불러오는동안 문제가 발생했어요. 다시 시도해주세요.');
      });
  }, []);

  const deleteIndividual = (title: string | undefined) => {
    if (!title) {
      alert('타이틀이 부정확합니다.');
      return;
    }

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
                  <Icon.HamburgerIcon width={40} height={40} />
                </Style.Button>
              </Style.SearchHeader>
              <Style.Line />

              <Layout.VStack alignItems='center' justifyContent='flex-start'>
                {searchHistorys.map(history => (
                  <SearchHistory searchHistory={history} key={uuid()} onDelete={deleteIndividual} />
                ))}
              </Layout.VStack>

              <Buttons.Button onClick={deleteAll}>전체 삭제</Buttons.Button>
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
    .then(keys => keys.map(key => localForage.getItem(key).then(data => data)));
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

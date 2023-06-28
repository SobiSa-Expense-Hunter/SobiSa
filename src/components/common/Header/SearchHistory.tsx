import { ReactNode } from 'react';

import { v4 as uuid } from 'uuid';

import * as Icon from '@/assets/Icons';
import Portal from '@/components/Portal';
import * as Style from '@/components/common/Header/style';
import * as Layout from '@/components/common/layout';
import searchSuggestions from '@/constant/searchSuggestions';
import * as Font from '@/styles/font';

import SearchHistory from './SearchHistoryList';
import type { Cycle } from 'framer-motion';

function SearchHistoryList({ toggleSideBar }: { toggleSideBar: Cycle }) {
  return (
    <Portal>
      <SearchHistoryLayout>
        <Style.ListBox variants={wrapperVariants} initial='initial' animate='animate' exit='exit'>
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
            {searchSuggestions.map(suggestion => (
              <SearchHistory title={suggestion?.title || ''} key={uuid()} />
            ))}
          </Layout.VStack>
        </Style.ListBox>
      </SearchHistoryLayout>

      <Style.Background />
    </Portal>
  );
}

function SearchHistoryLayout({ children }: { children: ReactNode }) {
  return (
    <Layout.VStack width='100%' height='100%' alignItems='center'>
      <Style.Absolute width='100%' height='100%' alignItems='center'>
        <Layout.VStack width='100%' height='100%' alignItems='flex-end'>
          {children}
        </Layout.VStack>
      </Style.Absolute>
    </Layout.VStack>
  );
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

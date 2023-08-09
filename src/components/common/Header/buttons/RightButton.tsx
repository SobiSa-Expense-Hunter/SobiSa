import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import * as Icons from '@/assets/Icons';
import SearchHistoryList from '@/components/common/Header/search-history';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';

import type { Cycle } from 'framer-motion';

const RightButton = ({
  isHome,
  isOpen,
  toggleIsOpen,
}: {
  isHome: boolean;
  isOpen: boolean;
  toggleIsOpen: Cycle;
}) => {
  if (isHome)
    return (
      <>
        <Buttons.HeaderButton onClick={() => toggleIsOpen()}>
          <Icons.HamburgerIcon width={40} height={40} />
        </Buttons.HeaderButton>
        <AnimatePresence>
          {isOpen && <SearchHistoryList toggleSideBar={toggleIsOpen} />}
        </AnimatePresence>
      </>
    );

  return <Layout.Box width='40px' height='40px' />;
};

export default RightButton;

import { useCycle, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as Icons from '@/assets/Icons';
import * as Style from '@/components/common/Header/style';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

import SearchHistoryList from './search-history';

const Header = () => {
  const router = useRouter();
  const isHome = router.asPath === '/';
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Style.HeaderWrapper>
      {isHome ? (
        <Buttons.HeaderButton onClick={() => router.push('/about')}>
          <Icons.Info width={14} height={14} />
        </Buttons.HeaderButton>
      ) : (
        <Buttons.HeaderButton onClick={() => router.back()}>
          <Icons.LeftIcon />
        </Buttons.HeaderButton>
      )}
      <Style.StyleTextLogo>
        <Link href='/'>
          <Font.Medium>SOBISA!</Font.Medium>
        </Link>
      </Style.StyleTextLogo>

      {isHome ? (
        <>
          <Buttons.HeaderButton onClick={() => toggleOpen()}>
            <Icons.HamburgerIcon width={40} height={40} />
          </Buttons.HeaderButton>
          <AnimatePresence>
            {isOpen && <SearchHistoryList toggleSideBar={toggleOpen} />}
          </AnimatePresence>
        </>
      ) : (
        <Layout.Box width='40px' height='40px' />
      )}
    </Style.HeaderWrapper>
  );
};

export default Header;

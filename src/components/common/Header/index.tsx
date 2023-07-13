import { useCycle, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as Icon from '@/assets/Icons';
import * as Style from '@/components/common/Header/style';
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
        <Style.Button
          onClick={() => router.push('/about')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <Icon.Info width={14} height={14} />
        </Style.Button>
      ) : (
        <Style.Button
          onClick={() => router.back()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <Icon.LeftIcon />
        </Style.Button>
      )}
      <Style.StyleTextLogo>
        <Link href='/'>
          <Font.Medium>SOBISA!</Font.Medium>
        </Link>
      </Style.StyleTextLogo>

      {isHome ? (
        <>
          <Style.Button
            onClick={() => toggleOpen()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <Icon.HamburgerIcon width={40} height={40} />
          </Style.Button>
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

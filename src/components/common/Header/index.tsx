import { useCycle } from 'framer-motion';
import { useRouter } from 'next/router';

import LeftButton from '@/components/common/Header/buttons/LeftButton';
import RightButton from '@/components/common/Header/buttons/RightButton';
import TextLogo from '@/components/common/Header/buttons/TextLogo';
import * as Style from '@/components/common/Header/style';

const Header = () => {
  const router = useRouter();
  const isHome = router.asPath === '/';
  const [isHistoryOpen, toggleIsHistoryOpen] = useCycle(false, true);

  return (
    <Style.HeaderWrapper>
      <LeftButton isHome={isHome} router={router} />
      <TextLogo />
      <RightButton isHome={isHome} isOpen={isHistoryOpen} toggleIsOpen={toggleIsHistoryOpen} />
    </Style.HeaderWrapper>
  );
};

export default Header;

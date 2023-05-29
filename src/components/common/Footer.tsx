import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import Indicator from '@/assets/Indicators';
import { PATHS_ORDER } from '@/constant';

const FooterContainer = styled.div`
  padding: 5vh 0;
  @supports (height: 5svh) {
    padding: 5svh 0;
  }
`;

const Footer = () => {
  const pathname = usePathname();
  const { length } = PATHS_ORDER;
  const order = PATHS_ORDER.indexOf(pathname) < 0 ? 0 : PATHS_ORDER.indexOf(pathname);

  return (
    <FooterContainer>
      <AnimatePresence>
        <Indicator length={length} order={order} />
      </AnimatePresence>
    </FooterContainer>
  );
};

export default Footer;

import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import Indicator from '@/assets/Indicators';

const FooterContainer = styled.div`
  padding: 5vh 0;
  @supports (height: 5svh) {
    padding: 5svh 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <AnimatePresence>
        <Indicator />
      </AnimatePresence>
    </FooterContainer>
  );
};

export default Footer;

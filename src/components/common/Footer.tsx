import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import Indicator from '@/assets/Indicators';

const FooterContainer = styled.div`
  padding: 56px 0;
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

import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import Indicator from '@/assets/Indicators';

const FooterContainer = styled.div`
  padding: 5vh 0 5vh;
  width: 100%;
  display: flex;
  align-items: center;
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

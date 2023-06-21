import { AnimatePresence } from 'framer-motion';
import getConfig from 'next/config';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import Indicator from '@/assets/Indicators';
import * as Layout from '@/components/common/layout';
import { PATHS_ORDER } from '@/constant';
import * as DefaultFont from '@/styles/font';

const Footer = () => {
  const pathname = usePathname();
  const { publicRuntimeConfig } = getConfig();
  const { length } = PATHS_ORDER;
  const order = PATHS_ORDER.indexOf(pathname) < 0 ? 0 : PATHS_ORDER.indexOf(pathname);

  return (
    <FooterContainer alignItems='center'>
      <AnimatePresence>
        <Indicator length={length} order={order} />
      </AnimatePresence>
      {pathname === '/' && (
        <Layout.Box margin='1vh 0 0'>
          <Font.GraySmall> {`소비사 `}</Font.GraySmall>
          <Font.OrangeSmall>{`ver ${publicRuntimeConfig?.version}`}</Font.OrangeSmall>
        </Layout.Box>
      )}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Layout.VStack)`
  padding: 2vh 0;
  @supports (height: 2svh) {
    padding: 2svh 0;
  }
`;

const Font = {
  GraySmall: styled(DefaultFont.Small)`
    color: ${({ theme }) => theme.colors.gray[2]};
  `,
  OrangeSmall: styled(DefaultFont.Small)`
    color: ${({ theme }) => theme.colors.subColor};
  `,
};

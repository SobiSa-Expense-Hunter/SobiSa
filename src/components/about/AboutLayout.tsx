import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import * as Style from '@/components/about/style';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

import type { Variants } from 'framer-motion';

interface AboutPageLayoutProps {
  pageNum: number;
  mainTexts: string[];
  subTexts: string[];
}

function AboutLayout({ pageNum, mainTexts, subTexts }: AboutPageLayoutProps) {
  const [firstMainText, secondMainText] = mainTexts;
  return (
    <Layout.VStack width='100%' height='100%' padding='0 16px' style={{ overflow: 'hidden' }}>
      <MideaMargin />
      <Layout.HStack width='100%'>
        <Font.Large style={{ flex: '1' }}>{pageNum} / 4</Font.Large>
        <Link href='/'>
          <Style.AboutFont.Skip>건너뛰기</Style.AboutFont.Skip>
        </Link>
      </Layout.HStack>

      <AnimatePresence mode='wait'>
        <motion.div
          key={uuid()}
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'tween', duration: 0.4 }}
        >
          <Layout.VStack margin='16px 0 0'>
            <Font.ExtraLarge style={{ fontWeight: '700' }}>{firstMainText}</Font.ExtraLarge>
            <Font.ExtraLarge style={{ fontWeight: '400' }}>{secondMainText}</Font.ExtraLarge>
            <Layout.Box height='16px' />
            {subTexts.map(text => (
              <Style.AboutFont.DetilGrayText key={uuid()}>{text}</Style.AboutFont.DetilGrayText>
            ))}
            <Layout.Box height='48px' />
            <Layout.VStack width='100%' position='relative' alignItems='center'>
              <Image
                src={`assets/image/about/phone_mockup/${pageNum}.png`}
                width={295}
                height={540}
                alt='mockup img'
                loading='lazy'
              />
            </Layout.VStack>
          </Layout.VStack>
        </motion.div>
      </AnimatePresence>
    </Layout.VStack>
  );
}

export default AboutLayout;

const MideaMargin = styled(Layout.Box)`
  @media (pointer: coarse) {
    height: 5vh;
    min-height: 5vh;
  }
  height: 77px;
  min-height: 77px;
`;

const variants: Variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0, transition: { type: 'tween', duration: 0.2 } },
};

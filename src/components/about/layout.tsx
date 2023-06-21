/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';

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
    <Layout.VStack style={{ overflow: 'hidden' }}>
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
          variants={switchScreen}
          initial='hidden'
          animate='enter'
          exit='exit'
        >
          <Layout.VStack margin='16px 0 0'>
            <Font.ExtraLarge style={{ fontWeight: '700' }}>
              <Style.Highlight>{firstMainText}</Style.Highlight>
            </Font.ExtraLarge>

            <Font.ExtraLarge style={{ fontWeight: '400' }}>{secondMainText}</Font.ExtraLarge>

            <Layout.Box height='16px' />
            {subTexts.map(text => (
              <Style.AboutFont.DetilGrayText key={uuid()}>{text}</Style.AboutFont.DetilGrayText>
            ))}
            <Layout.Box height='48px' />

            <Layout.VStack width='100%' position='relative' alignItems='center'>
              <ImageAnimation pageNum={pageNum} />
            </Layout.VStack>
          </Layout.VStack>
        </motion.div>
      </AnimatePresence>
    </Layout.VStack>
  );
}

export default AboutLayout;

const ImageAnimation = ({ pageNum }: { pageNum: number }) => {
  const [imgSrc, setImgSrc] = useState(`assets/image/about/phone_mockup/${pageNum}.webp`);

  useEffect(() => {
    if (pageNum !== 1) return;
    const timeout = setTimeout(() => {
      setImgSrc(`assets/image/about/phone_mockup/1-1.webp`);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pageNum]);

  return (
    <>
      {pageNum === 1 ? (
        <AnimatePresence mode='wait'>
          <motion.div
            key={uuid()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: '100%' }}
          >
            <ImageSize>
              <Image
                src={imgSrc}
                fill
                alt='animation mockup img'
                loading='lazy'
                style={{ objectFit: 'contain' }}
              />
            </ImageSize>
          </motion.div>
        </AnimatePresence>
      ) : (
        <ImageSize>
          <Image
            src={imgSrc}
            fill
            alt='mockup img'
            loading='lazy'
            style={{ objectFit: 'contain' }}
          />
        </ImageSize>
      )}
    </>
  );
};

const ImageSize = styled.div`
  position: relative;
  min-height: 540px; // image 원본 height 크기
  height: 100%;
  width: 100%;

  @media (pointer: coarse) {
    min-height: 400px; // 모바일일 경우 이미지 사이즈 조절
  }
`;

const MideaMargin = styled(Layout.Box)`
  @media (pointer: coarse) {
    height: 5vh;
    min-height: 5vh;
  }
  height: 77px;
  min-height: 77px;
`;

const switchScreen: Variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0, transition: { type: 'tween', duration: 0.4 } },
  exit: { opacity: 0, x: -200, y: 0, transition: { type: 'tween', duration: 0.4 } },
};

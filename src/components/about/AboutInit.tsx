import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import * as Style from '@/components/about/style';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

import CustomerBox from './CustomerBox';

function AboutInit() {
  return (
    <Style.Scroll height='100%' width='100%' padding='0 16px'>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween' }}
      >
        <MideaMargin />
        <Layout.VStack>
          <Font.ExtraLarge style={{ fontWeight: '800' }}>혹시</Font.ExtraLarge>
          <Font.ExtraLarge style={{ fontWeight: '500' }}>이런 적 없으신가요?</Font.ExtraLarge>
          <Layout.Box height='16px' />
          <Font.Medium>소비를 하고 후회하게 된</Font.Medium>
          <Font.Medium>주변의 경험들을 모아봤어요.</Font.Medium>
          <Layout.Box height='48px' />
        </Layout.VStack>
      </motion.div>

      <Layout.VStack gap='16px' alignItems='stretch'>
        {CustomerOpinionContents.map(({ mainText, subText, subTextOrange }, idx) => (
          <motion.div
            key={uuid()}
            initial={{ y: 30 * (idx + 1), opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'easyIn', duration: 0.5 }}
          >
            <CustomerBox
              imgNum={idx + 1}
              mainText={mainText}
              subText={subText}
              subTextOrange={subTextOrange}
            />
          </motion.div>
        ))}
      </Layout.VStack>

      <motion.div
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'easyIn', duration: 0.5 }}
      >
        <Layout.Box height='29px' />
        <Layout.VStack alignItems='center'>
          <Image src='assets/image/about/dots.png' width={5} height={44} alt='dots' />
        </Layout.VStack>
      </motion.div>
      <Layout.Box height='375px' />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'easyIn', duration: 0.5 }}
      >
        <Image
          src='assets/image/about/소비사_지갑텅텅.png'
          width={375}
          height={542}
          alt='소비사 지갑텅텅 이미지'
        />
      </motion.div>
    </Style.Scroll>
  );
}

const MideaMargin = styled(Layout.Box)`
  @media (pointer: coarse) {
    height: 40px;
  }
  height: 119px;
`;

const CustomerOpinionContents = [
  {
    mainText: '“이 물건 언제 샀더라..”',
    subText: '물건을 언제 샀는지',
    subTextOrange: '기억조차 안나는 J씨',
  },
  {
    mainText: '“내 통장에 왜 이거밖에 없지?”',
    subText: '과소비를 막지 않아',
    subTextOrange: '통장이 거덜나버린 H씨',
  },
  {
    mainText: '“그 땐 필요했는데..?!”',
    subText: '필요하지 않은 물건을',
    subTextOrange: '습관적으로 사는 Y씨',
  },
];

export default AboutInit;

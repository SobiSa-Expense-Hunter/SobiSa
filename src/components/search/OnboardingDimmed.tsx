import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import * as Icon from '@/assets/Icons';
import Portal from '@/components/Portal';
import { Background } from '@/components/common/Modal';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

import type { SearchInputOffset } from '@/pages';
import type { Variants } from 'framer-motion';

const inputVariants: Variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { type: 'tween', duration: 1 } },
  exit: { opacity: 0, transition: { type: 'tween', duration: 0.4 } },
};

function OnboardingDimmed({ searchInputPosition }: { searchInputPosition: SearchInputOffset }) {
  const show = true;
  const { x, y, width, height } = searchInputPosition;

  return (
    <Portal>
      <FixedFlexZIndex2 style={{ top: y - 45, left: x }}>
        <WhiteBox alignItems='center' justifyContent='center'>
          <Font.Medium> 사고 싶은 물건을 입력하세요!</Font.Medium>
        </WhiteBox>
        <Arrow style={{ top: `-2`, left: 190, transform: 'rotate(322deg)' }}>
          <Icon.AboutArrowIcon01 />
        </Arrow>
      </FixedFlexZIndex2>

      <FixedFlexZIndex2 style={{ top: y + 75, left: x + 65 }}>
        <WhiteBox alignItems='center' justifyContent='center'>
          <Font.Medium> 버튼을 눌러 검색하세요!</Font.Medium>
        </WhiteBox>
        <Arrow style={{ top: 0, left: 170 }}>
          <Icon.AboutArrowIcon02 />
        </Arrow>
      </FixedFlexZIndex2>

      <MakePosition
        style={{ top: y, left: x, width, height }}
        variants={inputVariants}
        initial='hidden'
        animate='enter'
        exit='exit'
      >
        <Image src='assets/image/about/seachInput.png' fill alt='input img' />
      </MakePosition>
      <Background show={show} />
    </Portal>
  );
}

export default OnboardingDimmed;

const MakePosition = styled(motion.div)`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 0;
`;

const FixedFlexZIndex2 = styled(Layout.Flex)`
  position: fixed;
  z-index: 2;
`;

const WhiteBox = styled(FixedFlexZIndex2)`
  background: white;
  width: 177px;
  height: 31px;
  border-radius: nullpx;
`;

const Arrow = styled.div`
  position: relative;
  z-index: 2;
`;

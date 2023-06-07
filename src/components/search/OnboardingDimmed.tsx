import type { ReactElement } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import * as Icon from '@/assets/Icons';
import Portal from '@/components/Portal';
import * as Button from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import useModalAnimation from '@/hooks/useModalAnimation';
import * as Font from '@/styles/font';

import type { SearchInputPositionAndSize } from '@/pages';
import type { Variants } from 'framer-motion';

function OnboardingDimmed({
  searchInputInfo,
  setLocalStorage,
}: {
  searchInputInfo: SearchInputPositionAndSize;
  setLocalStorage: (value: string) => void;
}) {
  const { show, animationAfterClose } = useModalAnimation(() => setLocalStorage('false'));
  const { x, y, width, height } = searchInputInfo;

  return (
    <FadInAndOutMotion>
      <Portal>
        <FixedFlexZIndex2 style={{ top: y - 45, left: x }}>
          <WhiteBox alignItems='center' justifyContent='center'>
            <Font.Medium> 사고 싶은 물건을 입력하세요!</Font.Medium>
          </WhiteBox>
          <Arrow style={{ top: '-2', left: 190, transform: 'rotate(322deg)' }}>
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

        <FixedFlexZIndex2 style={{ top: y, left: x, width, height }}>
          <Image src='assets/image/about/seachInput.png' fill alt='input img' />
        </FixedFlexZIndex2>

        <Button.BottomButton
          style={{
            position: 'fixed',
            zIndex: 2,
            bottom: '5%',
            left: '50%',
            transform: 'translate(-50%,0)',
          }}
          onClick={animationAfterClose}
        >
          소비사냥 하러 가기
        </Button.BottomButton>
        <Background show={show} onClick={animationAfterClose} />
      </Portal>
    </FadInAndOutMotion>
  );
}

const FadInAndOutMotion = ({ children }: { children: ReactElement }) => {
  return (
    <motion.div variants={inputVariants} initial='hidden' animate='enter' exit='exit'>
      {children}
    </motion.div>
  );
};

const inputVariants: Variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const FixedFlexZIndex2 = styled(Layout.Flex)`
  position: fixed;
  z-index: 2;
`;

const WhiteBox = styled(FixedFlexZIndex2)`
  background: white;
  width: 177px;
  height: 31px;
`;

const Arrow = styled.div`
  position: relative;
  z-index: 2;
`;

const Background = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default OnboardingDimmed;

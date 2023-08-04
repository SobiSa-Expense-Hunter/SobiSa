/* eslint-disable react/jsx-no-bind */
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import * as Icon from '@/assets/Icons';
import Portal from '@/components/Portal';
import * as Button from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import ToolTip from '@/components/common/tooltip';
import { ONBOARDING } from '@/constant/localstorage';
import * as Font from '@/styles/font';

import useOnboarding, { type OnboardingState } from './onboardingReducer';
import type { SearchInputPositionAndSize } from '@/pages';

function Onboarding({
  searchInputInfo,
  setDidWatchOnboarding,
}: {
  searchInputInfo: SearchInputPositionAndSize;
  setDidWatchOnboarding: (value: string) => void;
}) {
  const { onboardingState, dispatchOnboardingState } = useOnboarding();
  const { x, y, width, height } = searchInputInfo;

  const fadeOutTimer = () =>
    setTimeout(() => setDidWatchOnboarding(ONBOARDING.status.WATCHED), 300);

  function clickHandler() {
    if (onboardingState.initial) dispatchOnboardingState({ click: 'FIRST' });
    if (onboardingState.firstClick) {
      dispatchOnboardingState({ click: 'SECOND' });
      fadeOutTimer();
    }
  }

  return (
    <Portal>
      <div style={{ zIndex: 1 }}>
        {onboardingState.initial ? (
          <>
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
              <Image src='/assets/image/about/seachInput.png' fill alt='input img' />
            </FixedFlexZIndex2>

            <Button.BottomButton
              style={{
                position: 'fixed',
                zIndex: 2,
                bottom: '5%',
                left: '50%',
                transform: 'translate(-50%,0)',
              }}
              onClick={clickHandler}
            >
              시작하기
            </Button.BottomButton>
          </>
        ) : (
          <FadeInOut show={onboardingState.firstClick}>
            <FixedFlexZIndex2
              style={{ top: y + 35, left: x + 170, width: '133px', height: '37px' }}
            >
              <ToolTip arrowPosition='bottom' arrowAlign='left'>
                이런 것도 검색해 보세요!
              </ToolTip>
            </FixedFlexZIndex2>
          </FadeInOut>
        )}

        <FadeInBackground
          onClick={clickHandler}
          show={onboardingState}
          aria-label='FadeInBackground'
        />
      </div>
    </Portal>
  );
}

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

const fadeIn = keyframes`
  0%{opacity: 0;}
  100%{opacity: 1;}
`;

const fadeOut = keyframes`
  0%{opacity: 1;}
  100%{opacity: 0;}
`;

const FadeInBackground = styled.div<{ show: OnboardingState }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: inherit;
  animation: ${fadeIn} ease-in 0.3s;
  background-color: ${({ show }) => (show.initial ? `rgba(0, 0, 0, 0.5)` : 'none')};
`;

const FadeInOut = styled.div<{ show: boolean }>`
  z-index: inherit;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.3s ease-in;
`;

export default Onboarding;

import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ExtraLarge, Large } from '@/styles/font';
import { Alternatives } from '@/types/result';

interface AlternativeProps {
  alternative: Alternatives;
  wantedProductPrice: number;
}

const slideVariants = {
  visible: {
    x: 0,
  },
  hidden: {
    translateX: '-100%',
  },
};

function Alternative({
  alternative: { title, image, price, unit },
  wantedProductPrice,
}: AlternativeProps) {
  const amounts = Math.floor(wantedProductPrice / price);
  if (amounts <= 0) return null;
  const amountsLoop = Array.from({ length: amounts }, (_, i) => i + 1);

  return (
    <AlternativeWrapper key={title}>
      <AlternativeTextWrapper>
        <AlternativeInfo>
          {title}
          {`(${price.toLocaleString()}원)`}
        </AlternativeInfo>
        <ExtraLarge style={{ textAlign: 'right', fontSize: '17pt' }}>
          {amounts}&nbsp;
          {unit}
        </ExtraLarge>
      </AlternativeTextWrapper>
      <AlternativeIconsWrapper>
        {amounts > 8 ? (
          <AlternativeIcons
            variants={slideVariants}
            initial='visible'
            animate='hidden'
            transition={{
              ease: 'linear',
              duration: amounts / 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {amountsLoop.map(v => (
              <AlternativeIcon url={image || ''} key={`${title}_${v}`} />
            ))}
          </AlternativeIcons>
        ) : (
          <AlternativeIcons>
            {amountsLoop.map(v => (
              <AlternativeIcon url={image || ''} key={`${title}_${v}`} />
            ))}
          </AlternativeIcons>
        )}
      </AlternativeIconsWrapper>
    </AlternativeWrapper>
  );
}

export default Alternative;

const AlternativeWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  min-height: 154px;

  justify-content: space-between;
  box-sizing: border-box;
  gap: 16px;
  width: inherit;
  max-width: 310px;
  background-color: ${props => props.theme.colors.gray[0]};
  border: 1px solid ${props => props.theme.colors.gray[3]};
  border-radius: 12px;
  overflow: hidden;
`;

const AlternativeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AlternativeInfo = styled(Large)`
  font-weight: 500;
  word-break: keep-all;
  white-space: pre-line;
`;

const AlternativeIcons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 100%;
  width: fit-content;
  white-space: nowrap;
  text-overflow: clip;
  letter-spacing: 4px;
`;

const AlternativeIcon = styled.span<{ url: string }>`
  width: 24px;
  height: 24px;
  background-image: url('${props => props.url}');
`;

const AlternativeIconsWrapper = styled.div`
  overflow: hidden;
  padding: 0px 10px;
`;

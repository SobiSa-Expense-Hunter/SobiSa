import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Alternatives } from '@/types/result';

const AlternativeWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: white;
  justify-content: space-around;
  padding: 20px;
  height: 55px;
  box-sizing: border-box;
  gap: 20px;
`;

const AlternativeInfo = styled.p`
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  min-width: 100px;
`;
const AlternativeIcons = styled(motion.div)`
  height: 100%;
  font-size: 26px;
  white-space: nowrap;
  text-overflow: clip;
  letter-spacing: 4px;
`;

const AlternativeIconsWrapper = styled.div`
  flex-grow: 5;
  overflow: hidden;
`;

interface AlternativeProps {
  alternative: Alternatives;
  wantedProductPrice: number;
}

const slideVariants = {
  from: { x: '100%' },
  animate: { x: '-500%' },
};

function Alternative({ alternative, wantedProductPrice }: AlternativeProps) {
  const amounts = Math.floor(wantedProductPrice / alternative.price);

  return (
    <AlternativeWrapper key={alternative.title}>
      <AlternativeInfo>
        {alternative.title} {amounts} {alternative.unit}
      </AlternativeInfo>
      <AlternativeIconsWrapper>
        {amounts > 10 ? (
          <AlternativeIcons
            variants={slideVariants}
            initial='from'
            animate='animate'
            transition={{ type: 'linear', duration: 20, repeat: Infinity }}
          >
            {Array(amounts)
              .fill(0)
              .map(_ => `${alternative.image}`)}
          </AlternativeIcons>
        ) : (
          <AlternativeIcons>
            {Array(amounts)
              .fill(0)
              .map(_ => `${alternative.image}`)}
          </AlternativeIcons>
        )}
      </AlternativeIconsWrapper>
    </AlternativeWrapper>
  );
}

export default Alternative;

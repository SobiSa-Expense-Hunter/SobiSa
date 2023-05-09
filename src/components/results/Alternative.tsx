import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Large, Medium } from '@/styles/font';
import { Alternatives } from '@/types/result';

const AlternativeWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 64px;
  box-sizing: border-box;
  gap: 16px;
  width: inherit;
  background-color: ${props => props.theme.colors.gray[0]};
  border: 1px solid ${props => props.theme.colors.gray[3]};
  border-radius: 6px;
`;

const AlternativeInfo = styled(Large)`
  min-width: 80px;
  white-space: nowrap;
  color: ${props => props.theme.colors.gray[3]};
  font-weight: 500;
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

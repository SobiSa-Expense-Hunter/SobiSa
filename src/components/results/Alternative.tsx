import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Large } from '@/styles/font';
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
  overflow: hidden;
`;

const AlternativeInfo = styled(Large)`
  min-width: 80px;
  color: ${props => props.theme.colors.gray[3]};
  font-weight: 500;
  word-break: keep-all;
  white-space: pre-line;
`;
const AlternativeIcons = styled(motion.div)`
  height: 100%;
  font-size: 26px;
  white-space: nowrap;
  text-overflow: clip;
  letter-spacing: 4px;
`;

const AlternativeIconsWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  max-width: 184px;
`;

interface AlternativeProps {
  alternative: Alternatives;
  wantedProductPrice: number;
}

const slideVariants = {};

function Alternative({ alternative, wantedProductPrice }: AlternativeProps) {
  const amounts = Math.floor(wantedProductPrice / alternative.price);
  if (amounts <= 0) return null;

  return (
    <AlternativeWrapper key={alternative.title}>
      <AlternativeInfo>
        {alternative.title} {amounts}&nbsp;
        {alternative.unit}
      </AlternativeInfo>
      <AlternativeIconsWrapper>
        {amounts > 7 ? (
          <AlternativeIcons
            layout
            initial={{ translateX: '100%' }}
            animate={{ translateX: '-200%' }}
            transition={{ type: 'linear', duration: 10, repeat: Infinity }}
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

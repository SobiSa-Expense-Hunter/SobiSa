import { motion } from 'framer-motion';
import styled from 'styled-components';

import FrameName from '@/components/common/FrameName';
import { Large } from '@/styles/font';

export const ResultContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[2]};
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  cursor: default;
  padding: 0px 16px;
`;

export const ProductContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const ProductName = styled(FrameName)`
  font-size: ${props => props.theme.fontSize.xxs};
`;

export const ProductImage = styled.img`
  margin-top: 16px;
  height: 220px;
  min-width: 220px;
  max-width: 90%;
`;

export const AlternativesContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

export const AlternativeCardList = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  margin: 28px 0;
`;

export const AlternativeWrapper = styled.div`
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

export const AlternativeBigCard = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const AlternativeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AlternativeInfo = styled(Large)`
  font-weight: 500;
  word-break: keep-all;
  white-space: pre-line;
  color: ${props => props.theme.colors.gray[4]};
`;

export const AlternativeIconsWrapper = styled.div`
  overflow: hidden;
  padding: 0px 10px;
`;

export const AlternativeIcons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 100%;
  width: fit-content;
  white-space: nowrap;
  text-overflow: clip;
  letter-spacing: 4px;
`;

export const AlternativeIcon = styled.span<{ url: string }>`
  width: 24px;
  height: 24px;
  background-image: url('${props => props.url}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const AlternativeBigIcon = styled(AlternativeIcon)`
  display: flex;

  width: 96px;
  height: 96px;

  justify-content: center;
`;

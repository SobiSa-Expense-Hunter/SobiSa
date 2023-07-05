import styled from 'styled-components';

import FrameName from '@/components/common/FrameName';

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

export const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  margin: 28px 0;
`;

export const AlternativesContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

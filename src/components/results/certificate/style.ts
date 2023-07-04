import { motion } from 'framer-motion';
import styled from 'styled-components';

import { AwardXLarge, AwardXSmall } from '@/styles/font';

export const CertificateContainer = styled.div`
  position: relative;
`;

export const CertificateWrapper = styled.div`
  width: 310px;
  min-height: 632px;
  padding: 30px 20px 40px 20px;
  background: right top url('./assets/image/receipt.png') #ffffff;
  background-blend-mode: multiply, normal;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  & > div:not(div:last-of-type) {
    border-bottom: 1px solid ${props => props.theme.colors.gray[4]};
  }
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SmallColumnFlex = styled(ColumnFlex)`
  gap: 8px;
`;

export const ColumnFlexEnd = styled(ColumnFlex)`
  align-items: flex-end;
`;
export const ColumnFlexEndWithBorderBottom = styled(ColumnFlexEnd)`
  padding: 16px 0px;
`;

export const SmallFlexEnd = styled(ColumnFlexEnd)`
  gap: 8px;
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const SmallRowFlex = styled(RowFlex)`
  gap: 8px;
`;

export const ContentColumnFlex = styled(ColumnFlex)`
  padding: 16px 0px;
`;

export const ContentRowFlex = styled(RowFlex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const QRCodeImage = styled.img`
  width: 72px;
  height: 72px;
  mix-blend-mode: multiply;
`;

export const MediumGapContentColumnFlex = styled(ContentColumnFlex)`
  gap: 12px;
  padding-bottom: 0px;
  border-bottom: 0px;
  align-items: flex-start;

  span {
    color: ${props => props.theme.colors.gray[4]};
  }
`;

export const TextSpacer = styled.div`
  flex-grow: 1;
  display: inline-block;
  box-sizing: border-box;
  border: 1px dashed ${props => props.theme.colors.gray[4]};
`;

export const AwardXSmallGray6 = styled(AwardXSmall)`
  color: ${props => props.theme.colors.gray[6]};
`;

export const Sticker = styled(motion.span)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const StickerStamp = styled(motion.span)``;

export const ProductName = styled(AwardXLarge)`
  text-align: right;
  word-break: keep-all;
`;

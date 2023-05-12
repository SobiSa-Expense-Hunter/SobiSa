import React from 'react';

import { LayoutGroup, motion } from 'framer-motion';
import styled from 'styled-components';

import { ArrowIcon } from '@/assets/Icons';
import {
  CharacterBlackSticker,
  CharacterColorSticker,
  SobisaTextFillLogoSticker,
  SobisaTextLogoSticker,
} from '@/assets/Stickers';
import {
  AwardXLarge,
  AwardResultCost,
  AwardXXSmall,
  AwardXSmall,
  AwardSmallOrange,
} from '@/styles/font';

const CertificateContainer = styled.div`
  position: relative;
  width: 310px;
  min-height: 632px;
  padding: 30px 20px 40px 20px;
  background: right top url('./assets/image/receipt.png') #ffffff;
  background-blend-mode: multiply, normal;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
`;

const FlexEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

const SmallFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SmallFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const SmallFlexEnd = styled(FlexEnd)`
  gap: 8px;
`;

const DefaultContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.gray[4]};
`;

const RowContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const ContentContainer = styled(DefaultContentContainer)`
  border-top: 1px solid ${props => props.theme.colors.gray[4]};
`;

const QRCodeImage = styled.img`
  width: 72px;
  height: 72px;
  mix-blend-mode: multiply;
`;

const MediumGapContentContainer = styled(DefaultContentContainer)`
  gap: 12px;
  padding-bottom: 0px;
  border-bottom: 0px;
  align-items: flex-start;

  span {
    color: ${props => props.theme.colors.gray[4]};
  }
`;

const ContentSpaceElement = styled.div`
  flex-grow: 1;
  display: inline-block;
  box-sizing: border-box;
  border: 1px dashed ${props => props.theme.colors.gray[4]};
`;

const AwardXSmallGray6 = styled(AwardXSmall)`
  color: ${props => props.theme.colors.gray[6]};
`;

const Sticker = styled(motion.span)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const StickerStamp = styled(motion.span)``;

const Certificate = () => {
  return (
    <CertificateContainer>
      <FlexEnd style={{ marginBottom: '16px' }}>
        <SmallFlexEnd>
          <AwardXXSmall>No.0001</AwardXXSmall>
          <AwardXXSmall>{new Date().toISOString().substring(0, 19).replace('T', ' ')}</AwardXXSmall>
        </SmallFlexEnd>
        <AwardXLarge style={{ textOverflow: 'ellipsis' }}>Apple 2022 맥북</AwardXLarge>
      </FlexEnd>
      <ContentContainer>
        <RowContentContainer>
          <AwardXSmallGray6>할부기간</AwardXSmallGray6>
          <ContentSpaceElement />
          <AwardXXSmall>12개월</AwardXXSmall>
        </RowContentContainer>
        <AwardXSmallGray6>기회비용</AwardXSmallGray6>
        <SmallFlexColumn style={{ marginLeft: 20 }}>
          <RowContentContainer>
            <AwardXXSmall>공양미</AwardXXSmall>
            <ContentSpaceElement />
            <AwardXXSmall>300석</AwardXXSmall>
          </RowContentContainer>

          <RowContentContainer>
            <AwardXXSmall>공양미</AwardXXSmall>
            <ContentSpaceElement />
            <AwardXXSmall>300석</AwardXXSmall>
          </RowContentContainer>

          <RowContentContainer>
            <AwardXXSmall>공양미</AwardXXSmall>
            <ContentSpaceElement />
            <AwardXXSmall>300석</AwardXXSmall>
          </RowContentContainer>
        </SmallFlexColumn>
      </ContentContainer>
      <DefaultContentContainer style={{ alignItems: 'flex-end' }}>
        <AwardXSmall style={{ alignSelf: 'flex-start' }}>총 금액</AwardXSmall>
        <AwardResultCost>1,450,000,000₩</AwardResultCost>
      </DefaultContentContainer>
      <DefaultContentContainer>
        <RowContentContainer>
          <QRCodeImage src='./assets/image/qrcode.png' />
          <SmallFlexEnd>
            <AwardSmallOrange style={{ textAlign: 'right' }}>
              당신의 지갑 지킴이,
              <br />
              소비사!
            </AwardSmallOrange>
            <SmallFlexRow>
              <SmallFlexRow style={{ gap: '6px' }}>
                <ArrowIcon />
                <ArrowIcon />
                <ArrowIcon />
                <ArrowIcon />
                <ArrowIcon />
                <ArrowIcon />
              </SmallFlexRow>
              <AwardXXSmall>홈페이지 바로가기</AwardXXSmall>
            </SmallFlexRow>
          </SmallFlexEnd>
        </RowContentContainer>
      </DefaultContentContainer>
      <MediumGapContentContainer>
        <AwardXSmall>사기 전 충분히 고민했나요?</AwardXSmall>
        <RowContentContainer>
          <AwardXXSmall>https://www.youtube.com/watch</AwardXXSmall>
          <StickerStamp
            initial={{ scale: 5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              opacity: { ease: 'linear' },
              layout: { duration: 1 },
            }}
          >
            <SobisaTextLogoSticker />
          </StickerStamp>
        </RowContentContainer>
      </MediumGapContentContainer>

      <Sticker
        initial={{ scale: 3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transform: 'rotate(-21.33deg)' }}
        transition={{
          layout: { duration: 2 },
          delay: 0.1,
        }}
        style={{ left: 227, top: -24 }}
      >
        <SobisaTextFillLogoSticker />
      </Sticker>
      <Sticker
        initial={{ scale: 3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transform: 'rotate(20.37deg)' }}
        transition={{
          opacity: { ease: 'linear' },
          layout: { duration: 2 },
          delay: 0.2,
        }}
        style={{ left: -32, top: 14 }}
      >
        <CharacterBlackSticker />
      </Sticker>
      <Sticker
        initial={{ scale: 3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          opacity: { ease: 'linear' },
          layout: { duration: 2 },
          delay: 0.3,
        }}
        style={{ left: 20, top: -37 }}
      >
        <CharacterColorSticker />
      </Sticker>
    </CertificateContainer>
  );
};

export default Certificate;

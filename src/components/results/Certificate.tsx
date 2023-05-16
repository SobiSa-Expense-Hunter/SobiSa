import React from 'react';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ArrowIcon } from '@/assets/Icons';
import {
  CharacterBlackSticker,
  CharacterColorSticker,
  SobisaTextFillLogoSticker,
  SobisaTextLogoSticker,
} from '@/assets/Stickers';
import { useSearchStore } from '@/components/SearchProvider';
import NoticeModal from '@/components/modal/NoticeModal';
import {
  AwardXLarge,
  AwardXXLarge,
  AwardXXSmall,
  AwardXSmall,
  AwardSmallOrange,
} from '@/styles/font';
import { Alternatives } from '@/types/result';

const CertificateContainer = styled.div`
  position: relative;
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

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SmallColumnFlex = styled(ColumnFlex)`
  gap: 8px;
`;

const ColumnFlexEnd = styled(ColumnFlex)`
  align-items: flex-end;
`;
const ColumnFlexEndWithBorderBottom = styled(ColumnFlexEnd)`
  padding: 16px 0px;
`;

const SmallFlexEnd = styled(ColumnFlexEnd)`
  gap: 8px;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const SmallRowFlex = styled(RowFlex)`
  gap: 8px;
`;

const ContentColumnFlex = styled(ColumnFlex)`
  padding: 16px 0px;
`;

const ContentRowFlex = styled(RowFlex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const QRCodeImage = styled.img`
  width: 72px;
  height: 72px;
  mix-blend-mode: multiply;
`;

const MediumGapContentColumnFlex = styled(ContentColumnFlex)`
  gap: 12px;
  padding-bottom: 0px;
  border-bottom: 0px;
  align-items: flex-start;

  span {
    color: ${props => props.theme.colors.gray[4]};
  }
`;

const TextSpacer = styled.div`
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

const Certificate = ({ alternatives }: { alternatives: Alternatives[] }) => {
  const {
    product: { title, price },
    savingAmount,
  } = useSearchStore();
  const router = useRouter();

  if (savingAmount === undefined || savingAmount === 0) {
    return <NoticeModal onClose={() => router.back} message='저축할 금액이 입력되지 않았습니다.' />;
  }
  if (!title || !price) {
    return (
      <NoticeModal
        onClose={() => router.replace('/list')}
        message='구매할 상품이 정상적으로 선택되지 않았습니다'
      />
    );
  }

  const savingsPeriod = Math.round(price / savingAmount);

  return (
    <CertificateContainer>
      <ColumnFlexEndWithBorderBottom style={{ paddingTop: 0 }}>
        <SmallFlexEnd>
          <AwardXXSmall>No.0001</AwardXXSmall>
          <AwardXXSmall>{new Date().toISOString().substring(0, 19).replace('T', ' ')}</AwardXXSmall>
        </SmallFlexEnd>
        <AwardXLarge
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            textAlign: 'right',
          }}
        >
          {title}
        </AwardXLarge>
      </ColumnFlexEndWithBorderBottom>
      <ContentColumnFlex>
        <ContentRowFlex>
          <AwardXSmallGray6>할부기간</AwardXSmallGray6>
          <TextSpacer />
          <AwardXXSmall>{savingsPeriod}개월</AwardXXSmall>
        </ContentRowFlex>
        <AwardXSmallGray6>기회비용</AwardXSmallGray6>
        <SmallColumnFlex style={{ marginLeft: 20 }}>
          {alternatives.map(alternative => (
            <ContentRowFlex key={`receipt_${alternative.title}`}>
              <AwardXXSmall>{alternative.title}</AwardXXSmall>
              <TextSpacer />
              <AwardXXSmall>
                {Math.floor(price / alternative.price).toLocaleString()}
                {alternative.unit}
              </AwardXXSmall>
            </ContentRowFlex>
          ))}
        </SmallColumnFlex>
      </ContentColumnFlex>
      <ContentColumnFlex style={{ alignItems: 'flex-end' }}>
        <AwardXSmall style={{ alignSelf: 'flex-start' }}>총 금액</AwardXSmall>
        <AwardXXLarge>
          <span>{price.toLocaleString()}</span>
          <span style={{ marginLeft: 4 }}>₩</span>
        </AwardXXLarge>
      </ContentColumnFlex>
      <ContentColumnFlex>
        <ContentRowFlex>
          <QRCodeImage src='./assets/image/qrcode.png' alt='소비사로 이동하기 qr코드' />
          <SmallFlexEnd>
            <AwardSmallOrange style={{ textAlign: 'right' }}>
              당신의 지갑 지킴이,
              <br />
              소비사!
            </AwardSmallOrange>
            <SmallRowFlex>
              <SmallRowFlex style={{ gap: '6px' }}>
                {Array.from({ length: 6 }, (_, i) => i + 1).map(v => (
                  <ArrowIcon key={`arrow_${v}`} />
                ))}
              </SmallRowFlex>
              <AwardXXSmall>홈페이지 바로가기</AwardXXSmall>
            </SmallRowFlex>
          </SmallFlexEnd>
        </ContentRowFlex>
      </ContentColumnFlex>
      <MediumGapContentColumnFlex>
        <AwardXSmall>사기 전 충분히 고민했나요?</AwardXSmall>
        <ContentRowFlex>
          <AwardXXSmall>https://www.youtube.com/watch</AwardXXSmall>
          <StickerStamp
            initial={{ scale: 5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.8,
              opacity: { ease: 'linear' },
              layout: { duration: 1 },
            }}
          >
            <SobisaTextLogoSticker />
          </StickerStamp>
        </ContentRowFlex>
      </MediumGapContentColumnFlex>

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

import { ForwardedRef, forwardRef, useContext } from 'react';

import { ArrowIcon } from '@/assets/Icons';
import {
  CharacterBlackSticker,
  CharacterColorSticker,
  ExpensiveTextSticker,
  SobisaTextFillLogoSticker,
  SobisaTextLogoSticker,
} from '@/assets/Stickers';
import { useSearchStore } from '@/components/SearchProvider';
import AlternativesContext from '@/components/results/alternatives/AlternativesContext';
import { AwardSmallOrange, AwardXSmall, AwardXXLarge, AwardXXSmall } from '@/styles/font';
import { AlternativesCategory } from '@/types/result';
import getSavingsPeriod from '@/utils/alternatives';

import * as Style from './style';

type ReceiptProps = unknown;

const Receipt = (_: ReceiptProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    product: { title, price = 0 },
    savingAmount,
  } = useSearchStore();
  const { data, isLessThanAlternatives } = useContext(AlternativesContext);
  const date = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  })
    .format(new Date())
    .replace(',', '');

  const savingsPeriod = getSavingsPeriod(price, savingAmount);

  return (
    <Style.ReceiptContainer>
      <Style.ReceiptWrapper ref={ref}>
        <Style.ColumnFlexEndWithBorderBottom style={{ paddingTop: 0 }}>
          <Style.SmallFlexEnd>
            <AwardXXSmall>No.0001</AwardXXSmall>
            <AwardXXSmall>{date}</AwardXXSmall>
          </Style.SmallFlexEnd>
          <Style.ProductNameText>{title}</Style.ProductNameText>
        </Style.ColumnFlexEndWithBorderBottom>
        {isLessThanAlternatives ? (
          <>
            <Style.ContentColumnFlex>
              <Style.ContentRowFlex>
                <Style.AwardXSmallGray6Text>할부기간</Style.AwardXSmallGray6Text>
                <Style.TextSpacer />
                <AwardXXSmall>일시불</AwardXXSmall>
              </Style.ContentRowFlex>
            </Style.ContentColumnFlex>
            <Style.ContentColumnFlex style={{ alignItems: 'flex-end' }}>
              <AwardXSmall style={{ alignSelf: 'flex-start' }}>총 금액</AwardXSmall>
              <AwardXXLarge>
                <span>{price.toLocaleString()}</span>
                <span style={{ marginLeft: 4 }}>₩</span>
              </AwardXXLarge>
            </Style.ContentColumnFlex>
            <Style.ContentColumnFlex>
              <Style.ContentRowFlex>
                <Style.AwardXSmallGray6Text>기회비용</Style.AwardXSmallGray6Text>
                <Style.TextSpacer />
                <AwardXXSmall>(저축 : {savingAmount.toLocaleString()}원)</AwardXXSmall>
              </Style.ContentRowFlex>
              <Style.SmallColumnFlex style={{ marginLeft: 20 }}>
                {Object.values(data)
                  .flat(1)
                  .map(
                    alternative =>
                      alternative.category !== AlternativesCategory.stable && (
                        <Style.ContentRowFlex key={`receipt_${alternative.title}`}>
                          <AwardXXSmall>{alternative.title}</AwardXXSmall>
                          <Style.TextSpacer />
                          <AwardXXSmall>
                            {Math.floor(savingAmount / alternative.price).toLocaleString()}
                            {alternative.unit}
                          </AwardXXSmall>
                        </Style.ContentRowFlex>
                      ),
                  )}
              </Style.SmallColumnFlex>
            </Style.ContentColumnFlex>
          </>
        ) : (
          <>
            <Style.ContentColumnFlex>
              <Style.ContentRowFlex>
                <Style.AwardXSmallGray6Text>할부기간</Style.AwardXSmallGray6Text>
                <Style.TextSpacer />
                <AwardXXSmall>
                  {savingsPeriod === 1 ? '일시불' : `${savingsPeriod}개월`}
                </AwardXXSmall>
              </Style.ContentRowFlex>
              <Style.AwardXSmallGray6Text>기회비용</Style.AwardXSmallGray6Text>
              <Style.SmallColumnFlex style={{ marginLeft: 20 }}>
                {Object.values(data)
                  .flat(1)
                  .map(
                    alternative =>
                      alternative.category !== AlternativesCategory.stable && (
                        <Style.ContentRowFlex key={`receipt_${alternative.title}`}>
                          <AwardXXSmall>{alternative.title}</AwardXXSmall>
                          <Style.TextSpacer />
                          <AwardXXSmall>
                            {Math.floor(price / alternative.price).toLocaleString()}
                            {alternative.unit}
                          </AwardXXSmall>
                        </Style.ContentRowFlex>
                      ),
                  )}
              </Style.SmallColumnFlex>
            </Style.ContentColumnFlex>
            <Style.ContentColumnFlex style={{ alignItems: 'flex-end' }}>
              <AwardXSmall style={{ alignSelf: 'flex-start' }}>총 금액</AwardXSmall>
              <AwardXXLarge>
                <span>{price.toLocaleString()}</span>
                <span style={{ marginLeft: 4 }}>₩</span>
              </AwardXXLarge>
            </Style.ContentColumnFlex>
          </>
        )}

        <Style.ContentColumnFlex>
          <Style.ContentRowFlex>
            <Style.QRCodeImage src='./assets/image/qrcode.png' alt='소비사로 이동하기 qr코드' />
            <Style.SmallFlexEnd>
              <AwardSmallOrange style={{ textAlign: 'right' }}>
                당신의 지갑 지킴이,
                <br />
                소비사!
              </AwardSmallOrange>
              <Style.SmallRowFlex>
                <Style.SmallRowFlex style={{ gap: '6px' }}>
                  {Array(6)
                    .fill(0)
                    .map((v, i) => (
                      <ArrowIcon key={`arrow_${v}_${i + 1}`} />
                    ))}
                </Style.SmallRowFlex>
                <AwardXXSmall>홈페이지 바로가기</AwardXXSmall>
              </Style.SmallRowFlex>
            </Style.SmallFlexEnd>
          </Style.ContentRowFlex>
        </Style.ContentColumnFlex>
        <Style.MediumGapContentColumnFlex>
          <AwardXSmall>사기 전 충분히 고민했나요?</AwardXSmall>
          <Style.ContentRowFlex>
            <AwardXXSmall>https://www.youtube.com/watch</AwardXXSmall>
            <Style.StickerStamp>
              <SobisaTextLogoSticker />
            </Style.StickerStamp>
          </Style.ContentRowFlex>
        </Style.MediumGapContentColumnFlex>
      </Style.ReceiptWrapper>
      <Style.Sticker
        initial={{ scale: 3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transform: 'rotate(-21.33deg)' }}
        transition={{
          layout: { duration: 2 },
          delay: 0.1,
        }}
        style={{ left: 227, top: -22.85 }}
      >
        <SobisaTextFillLogoSticker />
      </Style.Sticker>
      <Style.Sticker
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
      </Style.Sticker>
      <Style.Sticker
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
      </Style.Sticker>
      {savingsPeriod !== 1 && (
        <Style.Sticker
          initial={{ scale: 3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transform: 'rotate(15.52deg)' }}
          transition={{
            opacity: { ease: 'linear' },
            layout: { duration: 2 },
            delay: 0.3,
          }}
          style={{ left: -58, top: 434 }}
        >
          <ExpensiveTextSticker />
        </Style.Sticker>
      )}
    </Style.ReceiptContainer>
  );
};

export default forwardRef(Receipt);

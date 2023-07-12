import { useState } from 'react';

import { ShareMainButton, ShareSubButton } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import AlternativeCardList from '@/components/results/alternatives/AlternativeCardList';
import AlternativesContext from '@/components/results/alternatives/AlternativesContext';
import { AlternativeContext } from '@/components/results/alternatives/useAlternatives';
import ResultShareModal from '@/components/results/result-share-modal/ResultShareModal';
import getSavingsPeriod from '@/components/results/utils';
import * as Font from '@/styles/font';
import { UserSelected } from '@/types/product';

import * as Style from './style';

interface ResultProps {
  userSelected: UserSelected;
  alternatives: AlternativeContext;
}

function Result({ userSelected, alternatives }: ResultProps) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const handleClick = (decision: boolean) => {
    setIsPurchase(decision);
    toggleModal();
  };

  const {
    product: { title, image, price: productPrice = 0 },
    savingAmount,
  } = userSelected;

  const savingsPeriod = getSavingsPeriod(productPrice, savingAmount);

  return (
    <AlternativesContext.Provider value={alternatives}>
      <Style.ResultContainer>
        <Style.ResultWrapper>
          <Layout.VStack alignItems='center' gap='16px' margin='16px 0'>
            <Style.ProductName>{title || ''}</Style.ProductName>
            <Style.ProductWrapper>
              <Font.ExtraLarge>{productPrice.toLocaleString()} 원</Font.ExtraLarge>
              <Font.LargeOrange style={{ fontWeight: 500 }}>
                {savingsPeriod === 1
                  ? '한달이면 살 수 있지만... 필요한가요?'
                  : `${savingsPeriod}개월동안 모아야 해요!`}
              </Font.LargeOrange>
            </Style.ProductWrapper>
            <Style.ProductImage
              src={image}
              alt={title}
              onError={e => {
                e.currentTarget.src = './assets/image/image.png';
              }}
            />
          </Layout.VStack>
          <Layout.VStack alignItems='center' gap='32px' width='100%' margin='16px 0'>
            <Font.Medium style={{ fontWeight: 500 }}>
              {alternatives.isLessThanAlternatives
                ? `${savingAmount.toLocaleString()}원으로 할 수 있는 일...`
                : `이걸 가지는 대신 할 수 있는 일...`}
            </Font.Medium>
            <AlternativeCardList
              alternatives={alternatives.data}
              productPrice={productPrice}
              savingAmount={savingAmount}
            />
          </Layout.VStack>
          <Layout.VStack alignItems='center' gap='64px' margin='28px 0'>
            <Font.Large style={{ fontWeight: 500 }}>
              이걸 보고도 갖고 싶으시다면, <br /> 임명장을 발급받아 보세요!
            </Font.Large>
            <Layout.HStack gap='8px' alignItems='flex-start'>
              <ShareSubButton onClick={() => handleClick(true)}>살래요</ShareSubButton>
              <ShareMainButton onClick={() => handleClick(false)}>안살래요</ShareMainButton>
            </Layout.HStack>
          </Layout.VStack>

          {isShowModal && <ResultShareModal onClose={toggleModal} isPurchase={isPurchase} />}
        </Style.ResultWrapper>
      </Style.ResultContainer>
    </AlternativesContext.Provider>
  );
}

export default Result;

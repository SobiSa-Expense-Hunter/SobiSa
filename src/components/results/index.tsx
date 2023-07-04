import { useState } from 'react';

import { ShareButton } from '@/components/common/buttons';
import AlternativesContext from '@/components/results/alternatives/AlternativesContext';
import { AlternativeContext } from '@/components/results/alternatives/useAlternatives';
import ResultShareModal from '@/components/results/result-share-modal/ResultShareModal';
import AlternativeCardList from '@/components/results/ui/AlternativeCardList';
import { ExtraLarge, Large, LargeOrange, Medium } from '@/styles/font';
import { UserSelected } from '@/types/product';
import getSavingsPeriod from '@/utils/alternatives';

import * as Style from './style';

interface ResultProps {
  userSelected: UserSelected;
  alternatives: AlternativeContext;
}

function Result({ userSelected, alternatives }: ResultProps) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
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
          <Style.ProductContainer>
            <Style.ProductName>{title || ''}</Style.ProductName>
            <Style.ProductWrapper>
              <ExtraLarge>{productPrice.toLocaleString()} 원</ExtraLarge>
              <LargeOrange style={{ fontWeight: 500 }}>
                {savingsPeriod === 1
                  ? '한달이면 살 수 있지만... 필요한가요?'
                  : `${savingsPeriod}개월동안 모아야 해요!`}
              </LargeOrange>
            </Style.ProductWrapper>
            <Style.ProductImage
              src={image}
              alt={title}
              onError={e => {
                e.currentTarget.src = './assets/image/image.png';
              }}
            />
          </Style.ProductContainer>
          <Style.AlternativesContainer>
            <Medium style={{ fontWeight: 500 }}>
              {alternatives.isLessThanAlternatives
                ? `${savingAmount.toLocaleString()}원으로 할 수 있는 일...`
                : `이걸 가지는 대신 할 수 있는 일...`}
            </Medium>
            <AlternativeCardList
              alternatives={alternatives.data}
              productPrice={productPrice}
              savingAmount={savingAmount}
            />
          </Style.AlternativesContainer>
          <Style.CertificateContainer>
            <Large style={{ fontWeight: 500 }}>
              이걸 보고도 갖고 싶으시다면, <br /> 임명장을 발급받아 보세요!
            </Large>
            <ShareButton onClick={toggleModal} style={{ marginTop: 8 }}>
              임명장 받기
            </ShareButton>
          </Style.CertificateContainer>

          {showModal && <ResultShareModal onClose={toggleModal} />}
        </Style.ResultWrapper>
      </Style.ResultContainer>
    </AlternativesContext.Provider>
  );
}

export default Result;

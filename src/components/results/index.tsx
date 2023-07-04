/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import localForage from 'localforage';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useSearchStore } from '@/components/SearchProvider';
import FrameName from '@/components/common/FrameName';
import { ShareButton } from '@/components/common/buttons';
import NoticeModal from '@/components/modal/NoticeModal';
import Alternative from '@/components/results/Alternative';
import AlternativesContext from '@/components/results/AlternativesContext';
import CertificateAndShareModal from '@/components/results/CertificateAndShareModal';
import alternatives from '@/constant/Alternatives';
import { ExtraLarge, Large, LargeOrange, Medium } from '@/styles/font';

import type { UserSearchHistory } from '@/types/product';
import type { Alternatives } from '@/types/result';

const getRandomAlternatives = (price: number) => {
  return alternatives.filter(obj => obj.price <= price).sort(() => 0.5 - Math.random());
};

function Result() {
  const [showModal, setShowModal] = useState(false);
  const {
    product: { title, image, price = 0 },
    savingAmount,
  } = useSearchStore();
  const router = useRouter();

  const [alternativesContextValue, setAlternativesContextValue] = useState({
    alternatives,
    isLessThanAlternatives: false,
  });

  const { alternatives: randomAlternatives, isLessThanAlternatives: lessThanAlternatives } =
    alternativesContextValue;

  useEffect(() => {
    let isLessThanAlternatives = false;
    let newAlternatives: Alternatives[];
    if (alternatives.every(obj => obj.price > price)) {
      newAlternatives = getRandomAlternatives(savingAmount);
      isLessThanAlternatives = true;
    } else {
      newAlternatives = getRandomAlternatives(price);
    }

    const thisAlternatives =
      newAlternatives.length > 5 ? newAlternatives.slice(0, 3) : newAlternatives;

    setAlternativesContextValue({
      alternatives: thisAlternatives,
      isLessThanAlternatives,
    });

    // TODO : Title 값에 빈 값이 들어올 수 있어 해당 코드 앞에서 title과 price의 유효성 검사 필요.
    const userSearchedProduct: UserSearchHistory = {
      product: { title, image, price },
      Alternative_title: thisAlternatives.map(alternative => alternative.title),
      searchDate: new Date().toLocaleDateString(),
      savingAmount,
    };

    localForage.setItem(title || '', userSearchedProduct);
  }, [price, savingAmount]);

  if (!title || !price) {
    return (
      <NoticeModal
        onClose={() => router.replace('/list')}
        message='구매할 상품이 정상적으로 선택되지 않았습니다'
      />
    );
  }

  if (savingAmount === undefined || savingAmount === 0) {
    return (
      <NoticeModal
        onClose={() => router.replace('/savingamount')}
        message='저축할 금액이 입력되지 않았습니다.'
      />
    );
  }

  const savingsPeriod = Math.ceil(price / savingAmount);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <AlternativesContext.Provider value={alternativesContextValue}>
      <Container>
        <Wrapper>
          <ProductContainer>
            <ProductName>{title}</ProductName>
            <ProductWrapper>
              <ExtraLarge>{price.toLocaleString()} 원</ExtraLarge>
              <LargeOrange style={{ fontWeight: 500 }}>
                {savingsPeriod === 1
                  ? '한달이면 살 수 있지만... 필요한가요?'
                  : `${savingsPeriod}개월동안 모아야 해요!`}
              </LargeOrange>
            </ProductWrapper>
            <ProductImage
              src={image}
              alt={title}
              onError={e => {
                e.currentTarget.src = './assets/image/image.png';
              }}
            />
          </ProductContainer>
          <AlternativesContainer>
            <Medium style={{ fontWeight: 500 }}>
              {lessThanAlternatives
                ? `${savingAmount.toLocaleString()}원으로 할 수 있는 일...`
                : `이걸 가지는 대신 할 수 있는 일...`}
            </Medium>
            <AlternativeList>
              {randomAlternatives.map(alternative => (
                <Alternative
                  alternative={alternative}
                  wantedProductPrice={lessThanAlternatives ? savingAmount : price}
                  key={alternative.title}
                />
              ))}
            </AlternativeList>
          </AlternativesContainer>
          <CertificateContainer>
            <Large style={{ fontWeight: 500 }}>
              이걸 보고도 갖고 싶으시다면, <br /> 임명장을 발급받아 보세요!
            </Large>
            <ShareButton onClick={toggleModal} style={{ marginTop: 8 }}>
              임명장 받기
            </ShareButton>
          </CertificateContainer>

          {showModal && <CertificateAndShareModal onClose={toggleModal} />}
        </Wrapper>
      </Container>
    </AlternativesContext.Provider>
  );
}

export default Result;

const Container = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  cursor: default;
  padding: 0px 16px;
`;

const ProductContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const ProductName = styled(FrameName)`
  font-size: ${props => props.theme.fontSize.xxs};
`;

const ProductImage = styled.img`
  margin-top: 16px;
  height: 220px;
  min-width: 220px;
  max-width: 90%;
`;

const AlternativesContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const AlternativeList = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  margin: 28px 0;
`;

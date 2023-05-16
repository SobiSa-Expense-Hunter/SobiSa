import { useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useSearchStore } from '@/components/SearchProvider';
import FrameName from '@/components/common/FrameName';
import { ShareButton } from '@/components/common/buttons';
import CertificateAndShareModal from '@/components/modal/CertificateAndShareModal';
import NoticeModal from '@/components/modal/NoticeModal';
import Alternative from '@/components/results/Alternative';
import { alternatives } from '@/constant';
import { ExtraLarge, Large, LargeOrange, Medium } from '@/styles/font';

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
`;

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  margin: 16px 0 56px;
`;

function Result() {
  const [showModal, setShowModal] = useState(false);
  const {
    product: { title, image, price },
    savingAmount,
  } = useSearchStore();
  const router = useRouter();

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

  const savingsPeriod = Math.round(price / savingAmount);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const randomAlternatives = (() => {
    const newAlternatives = alternatives
      .filter(obj => obj.price < price)
      .sort(() => 0.5 - Math.random());
    return newAlternatives.length > 5 ? newAlternatives.slice(0, 4) : newAlternatives;
  })();

  return (
    <Wrapper>
      <ProductContainer>
        <ProductName>{title}</ProductName>
        <ProductWrapper>
          <ExtraLarge>{price.toLocaleString()} 원</ExtraLarge>
          <LargeOrange style={{ fontWeight: 500 }}>
            {savingsPeriod}개월동안 모아야 해요!
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
        <Medium style={{ fontWeight: 500 }}>이걸 가지는 대신 할 수 있는 일...</Medium>
        <AlternativeList>
          {randomAlternatives.map(alternative => (
            <Alternative
              alternative={alternative}
              wantedProductPrice={price}
              key={alternative.title}
            />
          ))}
        </AlternativeList>
      </AlternativesContainer>
      <CertificateContainer>
        <Large style={{ fontWeight: 500 }}>
          이걸 보고도 갖고 싶으시다면, <br /> 임명장을 발급받아 보세요!
        </Large>
        <ShareButton onClick={toggleModal}>임명장 받기</ShareButton>
      </CertificateContainer>

      {showModal && (
        <CertificateAndShareModal onClose={toggleModal} alternatives={randomAlternatives} />
      )}
    </Wrapper>
  );
}

export default Result;

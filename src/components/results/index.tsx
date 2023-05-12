import { useState } from 'react';

import styled from 'styled-components';

import UserSelectedData from '@/__test__/dummy/UserSelectData';
import FrameName from '@/components/common/FrameName';
import { ShareButton } from '@/components/common/buttons';
import CertificateAndShareModal from '@/components/modal/CertificateAndShareModal';
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
  const {
    product: { title, image, price },
    savingAmount,
  } = UserSelectedData;

  const [showModal, setShowModal] = useState(false);

  const savingsPeriod = Math.round(price / savingAmount);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

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
          {alternatives.map(alternative => (
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

      {showModal && <CertificateAndShareModal onClose={toggleModal} />}
    </Wrapper>
  );
}

export default Result;

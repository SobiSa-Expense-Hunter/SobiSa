import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Indicator01 } from '@/assets/Indicators';
import { useSearchStore } from '@/components/SearchProvider';
import FrameName from '@/components/common/FrameName';
import { ShareButton } from '@/components/common/buttons';
import CertificateAndShareModal from '@/components/modal/CertificateAndShareModal';
import NoticeModal from '@/components/modal/NoticeModal';
import Alternative from '@/components/results/Alternative';
import alternatives from '@/constant/Alternatives';
import { ExtraLarge, Large, LargeOrange, Medium } from '@/styles/font';
import { Alternatives } from '@/types/result';

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
  margin: 28px 0 56px;
`;

function Result() {
  const [showModal, setShowModal] = useState(false);
  const {
    product: { title, image, price },
    savingAmount,
  } = useSearchStore();
  const router = useRouter();
  const [randomAlternatives, setRandomAlternatives] = useState<Alternatives[]>(alternatives);

  useEffect(() => {
    const newAlternatives = alternatives
      .filter(obj => obj.price <= (price ?? 0))
      .sort(() => 0.5 - Math.random());
    setRandomAlternatives(
      newAlternatives.length > 5 ? newAlternatives.slice(0, 3) : newAlternatives,
    );
  }, [price]);

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

  return (
    <Container>
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
          <ShareButton onClick={toggleModal} style={{ marginTop: 8 }}>
            임명장 받기
          </ShareButton>
          <Indicator01 />
        </CertificateContainer>

        {showModal && (
          <CertificateAndShareModal onClose={toggleModal} alternatives={randomAlternatives} />
        )}
      </Wrapper>
    </Container>
  );
}

export default Result;

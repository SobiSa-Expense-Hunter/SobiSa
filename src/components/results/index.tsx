import styled from 'styled-components';

import UserSelectedData from '@/__test__/dummy/UserSelectData';
import { LineImage } from '@/assets';
import FrameName from '@/components/common/FrameName';
import { BottomButton } from '@/components/common/buttons';
import Alternative from '@/components/results/Alternative';
import { alternatives } from '@/constant';
import { ExtraLarge, LargeOrange, Medium } from '@/styles/font';

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
  color: ${props => props.theme.colors.gray[5]};
  font-size: ${props => props.theme.fontSize.s};
`;

const ProductPrice = styled(ExtraLarge)`
  color: ${props => props.theme.colors.gray[6]};
`;

const ProductImage = styled(LineImage)`
  margin-top: 16px;
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

  const savingsPeriod = Math.round(price / savingAmount);
  return (
    <Wrapper>
      <ProductContainer>
        <ProductName>{title}</ProductName>
        <ProductWrapper>
          <ProductPrice>{price.toLocaleString()} 원</ProductPrice>
          <LargeOrange>{savingsPeriod}개월동안 모아야 해요!</LargeOrange>
        </ProductWrapper>
        <ProductImage />
      </ProductContainer>
      <AlternativesContainer>
        <Medium>이걸 가지는 대신 할 수 있는 일...</Medium>
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
        <Medium>
          이걸 보고도 갖고 싶으시다면, <br /> 임명장을 발급받아 보세요!
        </Medium>
        <BottomButton>임명장 받기</BottomButton>
      </CertificateContainer>
    </Wrapper>
  );
}

export default Result;

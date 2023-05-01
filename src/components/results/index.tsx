import React, { useContext } from 'react';

import styled from 'styled-components';

import UserSelectedData from '@/__test__/dummy/UserSelectData';
import alternatives from '@/constant';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  max-width: 767px;
  min-width: 480px;
  padding: 30px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 26px;
  gap: 15px;
`;

const ProductTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  background: #e2e2e2;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ProductImage = styled.img``;

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 26px;
`;

const SavingsPeriod = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const AlternativesWrapper = styled.div`
  margin: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
  width: 400px;
`;

const AlternativeWords = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;

const Alternative = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: white;
  justify-content: space-around;
  padding: 20px;
  height: 55px;
  box-sizing: border-box;
`;

const AlternativeInfo = styled.p`
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
`;
const AlternativeIcons = styled.div`
  flex-grow: 2;
`;

const CertificateWrapper = styled.div`
  width: 80%;
`;
const CertificateWords = styled.p`
  font-weight: 700;
  line-height: 26px;
  text-align: center;
`;
const CertificateButton = styled.button`
  appearance: none;
  padding: 10px 20px;
  width: 100%;
  background: grey;
  font-weight: 700;
  font-size: 18px;
  border: 0px;
  border-radius: 5px;
  color: white;
  margin: 10px 0px;
  cursor: pointer;
`;

function Result() {
  const {
    product: { title, image, price },
    savingAmount,
  } = UserSelectedData;

  const savingsPeriod = Math.round(price / savingAmount);

  return (
    <Wrapper>
      <ProductWrapper>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price.toLocaleString()} 원</ProductPrice>
        <SavingsPeriod>{savingsPeriod}개월동안 모아야 해요!</SavingsPeriod>
        <ProductImage src={image} alt={title} />
      </ProductWrapper>
      <AlternativesWrapper>
        <AlternativeWords>이걸 가지는 대신 할 수 있는 일...</AlternativeWords>
        {alternatives.map(alternative => (
          <Alternative key={alternative.title}>
            <AlternativeInfo>
              {alternative.title} {Math.floor(price / alternative.price)} {alternative.unit}
            </AlternativeInfo>
            <AlternativeIcons>
              {Array(Math.floor(price / alternative.price))
                .fill(0)
                .slice(0, 10)
                .map(_ => '☕️')}
            </AlternativeIcons>
          </Alternative>
        ))}
      </AlternativesWrapper>
      <CertificateWrapper>
        <CertificateWords>
          이걸 보고도 갖고 싶으시다면, <br /> 임명장을 발급받아 보세요!
        </CertificateWords>
        <CertificateButton>임명장 받기</CertificateButton>
      </CertificateWrapper>
    </Wrapper>
  );
}

export default Result;

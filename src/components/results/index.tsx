import styled from 'styled-components';

import UserSelectedData from '@/__test__/dummy/UserSelectData';
import Alternative from '@/components/results/Alternative';
import { shareOnFacebook, shareOnKakao, shareOnTwitter } from '@/components/results/share';
import { alternatives, sharedMessage } from '@/constant';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  max-width: 767px;
  min-width: 480px;
  padding: 30px;
  cursor: default;
`;

const ProductContainer = styled.div`
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

const AlternativesContainer = styled.div`
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

const CertificateContainer = styled.div`
  width: 80%;
`;
const CertificateWords = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-top: 50px;
  text-align: center;
`;
const CertificateButton = styled.button`
  appearance: none;
  padding: 10px 20px;
  width: 100%;
  background: grey;
  font-weight: 700;
  font-size: 20px;
  border: 0px;
  border-radius: 5px;
  color: white;
  margin: 10px 0px;
  margin-top: 20px;
  cursor: pointer;
`;

const ShareContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const ShareButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
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
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price.toLocaleString()} 원</ProductPrice>
        <SavingsPeriod>{savingsPeriod}개월동안 모아야 해요!</SavingsPeriod>
        <ProductImage src={image} alt={title} />
      </ProductContainer>
      <AlternativesContainer>
        <AlternativeWords>이걸 가지는 대신 할 수 있는 일...</AlternativeWords>
        {alternatives.map(alternative => (
          <Alternative
            alternative={alternative}
            wantedProductPrice={price}
            key={alternative.title}
          />
        ))}
      </AlternativesContainer>
      <CertificateContainer>
        <CertificateWords>
          이걸 보고도 갖고 싶으시다면, <br /> 임명장을 발급받아 보세요!
        </CertificateWords>
        <CertificateButton>임명장 받기</CertificateButton>
      </CertificateContainer>
      <ShareContainer>
        {navigator.share && navigator.canShare(sharedMessage) && (
          <ShareButton onClick={() => window.navigator.share(sharedMessage)}>공유하기</ShareButton>
        )}
        <ShareButton onClick={shareOnTwitter}>
          <img
            src='https://play-lh.googleusercontent.com/8sc6LSo3dRf54GaLdQR8UZfzd_fgHgWMJlNxGLP1HWPEU7YY4UxkyHc8-qCNwtyiqO55'
            alt='트위터 공유하기 버튼'
          />
        </ShareButton>
        <ShareButton onClick={shareOnFacebook}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png?20220821121039'
            alt='페이스북 공유하기 버튼'
          />
        </ShareButton>
        <ShareButton onClick={shareOnKakao}>
          <img
            src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
            alt='카카오톡 공유 보내기 버튼'
          />
        </ShareButton>
      </ShareContainer>
    </Wrapper>
  );
}

export default Result;

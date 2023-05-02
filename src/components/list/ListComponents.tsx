import styled from 'styled-components';

import useSearchProduct from '@/hooks/useSearchProduct';

const ListComponents = () => {
  const userSearch = '빵';
  const { products, isLoading } = useSearchProduct(userSearch);

  if (isLoading || products === undefined) return <p>로딩중..</p>;

  return (
    <DummyWrapper>
      {products.map(product => (
        <StyledListBox key={`${product.productId} key`}>
          <StyledImgWrapper>
            <img src={product.image} alt={`${product.productId}img`} />
          </StyledImgWrapper>
          <p>{product.title}</p>
          <p>{product.price} 원</p>
        </StyledListBox>
      ))}
    </DummyWrapper>
  );
};

export default ListComponents;

const StyledListBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const StyledImgWrapper = styled.div`
  img {
    max-width: 50px;
  }
`;

const DummyWrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
`;

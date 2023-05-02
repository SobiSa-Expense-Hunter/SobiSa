import React from 'react';

import styled from 'styled-components';

import type { Product } from '@/constant/type';

const ListBox = ({ product }: { product: Product }) => {
  const { productId, image, price, title } = product;
  return (
    <StyledListBox>
      <StyledImgWrapper>
        <img src={image} alt={`${productId} img`} />
      </StyledImgWrapper>
      <p>{title}</p>
      <p>{price} 원</p>
    </StyledListBox>
  );
};

export default ListBox;

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

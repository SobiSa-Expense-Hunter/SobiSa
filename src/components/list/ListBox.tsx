import styled from 'styled-components';

import { StyledListBox } from '@/components/list/styles';

import type { Product } from '@/types/product';

interface ListBoxProps {
  product: Product;
  listClickHandler: (product: Product) => void;
}

const ListBox = ({ product, listClickHandler }: ListBoxProps) => {
  const { productId, image, price, title } = product;
  return (
    <StyledListBox onClick={() => listClickHandler(product)}>
      <StyledImgWrapper>
        <img src={image} alt={`${productId} img`} />
      </StyledImgWrapper>
      <p>{title}</p>
      <p>{price} 원</p>
    </StyledListBox>
  );
};

export default ListBox;

const StyledImgWrapper = styled.div`
  img {
    max-width: 100px;
  }
`;

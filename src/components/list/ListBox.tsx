import Image from 'next/image';
import styled from 'styled-components';

import { StyledListContainer } from '@/components/list/styles';
import { Medium, MediumOrange, Small } from '@/styles/font';

import type { Product } from '@/types/product';

interface ListBoxProps {
  product: Product;
  listClickHandler: (product: Product) => void;
}

const ListBox = ({ product, listClickHandler }: ListBoxProps) => {
  const { productId, image, price, title, brand, category1, category2 } = product;
  return (
    <StyledListContainer onClick={() => listClickHandler(product)}>
      <Image
        src={image || ''}
        alt={`${productId} img`}
        width={111}
        height={111}
        placeholder='blur'
        blurDataURL='/assets/icons/placeholder_box.svg'
      />
      <TextItem>
        <Title className='title'>{title}</Title>
        <MediumOrange>{price?.toLocaleString()} 원</MediumOrange>
        <ItemClass>{`${category1} > ${brand === '' ? category2 : brand}`}</ItemClass>
      </TextItem>
    </StyledListContainer>
  );
};

export default ListBox;

const TextItem = styled.div`
  flex: 1;
  display: grid;
  flex-direction: column;
  gap: 8px 0px;
  width: 183px;

  text-align: initial;
  white-space: nowrap;
`;

const Title = styled(Medium)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemClass = styled(Small)`
  margin-top: 8px;
`;

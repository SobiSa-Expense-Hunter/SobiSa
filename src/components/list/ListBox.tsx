import Image from 'next/image';

import * as Style from '@/components/list/styles';
import * as Font from '@/styles/font';

import type { Product } from '@/types/product';

interface ListBoxProps {
  product: Product;
  listClickHandler: (product: Product) => void;
}

const ListBox = ({ product, listClickHandler }: ListBoxProps) => {
  const { productId, image, price, title, brand, category1, category2 } = product;
  return (
    <Style.StyledListContainer onClick={() => listClickHandler(product)}>
      <Image
        src={image || ''}
        alt={`${productId} img`}
        width={111}
        height={111}
        placeholder='blur'
        blurDataURL='/assets/icons/placeholder_box.svg'
      />
      <Style.TextItem>
        <Style.Title className='title'>{title}</Style.Title>
        <Font.MediumOrange>{price?.toLocaleString()} 원</Font.MediumOrange>
        <Style.ItemClass>{`${category1} > ${brand === '' ? category2 : brand}`}</Style.ItemClass>
      </Style.TextItem>
    </Style.StyledListContainer>
  );
};

export default ListBox;

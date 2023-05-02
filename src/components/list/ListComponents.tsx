import { useState } from 'react';

import useSearchProduct from '@/hooks/useSearchProduct';

const ListComponents = () => {
  const userSearch = '빵';
  const { products, isLoading } = useSearchProduct(userSearch);
  const [userInput, setUserInput] = useState('');

  if (isLoading || products === undefined) return <p>로딩중..</p>;

  return (
    <>
      {products.map(product => (
        <p key={`${product.title} key`}>{product.title}</p>
      ))}
    </>
  );
};

export default ListComponents;

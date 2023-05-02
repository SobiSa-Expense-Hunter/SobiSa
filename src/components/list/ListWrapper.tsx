import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import useSearchProduct from '@/hooks/useSearchProduct';

import ListBox from './ListBox';

const ListWrapper = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const userSearch = '빵';
  const { products, queryRes } = useSearchProduct(userSearch);
  const { isLoading, hasNextPage, fetchNextPage } = queryRes;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  });

  if (isLoading || products === undefined) return <p>로딩중..</p>;

  return (
    <DummyWrapper>
      {products.map(product => (
        <ListBox key={`${product.productId} key`} product={product} />
      ))}
    </DummyWrapper>
  );
};

export default ListWrapper;

const DummyWrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  text-align: center;
  margin: 0 10vw;
`;

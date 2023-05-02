import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import ListBox from '@/components/list/ListBox';
import useSearchProducts from '@/hooks/useSearchProduct';

const userSearch = '빵';

const ListPage = () => {
  const { ref, inView } = useInView();
  const { products, queryRes } = useSearchProducts(userSearch);
  const { isLoading, hasNextPage, isFetchingNextPage, isFetching, fetchNextPage } = queryRes;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading || products === undefined) return <p>로딩중..</p>;

  return (
    <DummyWrapper>
      {products.map(product => (
        <ListBox key={`${product.productId} key`} product={product} />
      ))}

      <button
        type='button'
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || !isFetchingNextPage}
      >
        {
          // eslint-disable-next-line no-nested-ternary
          isFetchingNextPage
            ? '로딩중..'
            : hasNextPage
            ? '새로운걸로 로딩'
            : '더이상 로드할 내용이 없습니다'
        }
      </button>

      <div>{isFetching && !isFetchingNextPage ? 'Background Updating...' : null}</div>
    </DummyWrapper>
  );
};

export default ListPage;

const DummyWrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  text-align: center;
  margin: 0 10vw;
`;

import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { ListBox } from '@/components/list';
import { StyledListBox } from '@/components/list/styles';
import useSearchProducts from '@/hooks/useSearchProduct';
import { Product } from '@/types/product';

const userSearch = '강아지 인형';

const ListPage = () => {
  const { ref, inView } = useInView();
  const { products, queryRes } = useSearchProducts(userSearch);
  const { fetchNextPage, isLoading, hasNextPage, isFetching } = queryRes;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading || products === undefined) return <p>로딩중..</p>;

  const listClickHandler = (product: Product) => {
    // eslint-disable-next-line no-restricted-globals
    confirm(`${product.title} 제품을 선택하신게 맞나요? / 금액: ${product.price} `);
  };

  const topBtnHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <UserSearchComponent>검색어 : {userSearch}</UserSearchComponent>
      <TopBtn onClick={() => topBtnHandler()}>위로 가기</TopBtn>
      <DummyWrapper>
        {products.map(product => (
          <ListBox
            key={`${product.productId} key`}
            product={product}
            listClickHandler={listClickHandler}
          />
        ))}
        <StyledListBox ref={ref} onClick={() => fetchNextPage()}>
          {isFetching && hasNextPage ? (
            <p>로딩중..</p>
          ) : (
            <>
              <p>더이상 로드할 내용이 없습니다</p>
              <div>
                <button type='button'>검색어 다시 입력하기</button>
              </div>
            </>
          )}
        </StyledListBox>
      </DummyWrapper>
    </>
  );
};

export default ListPage;

const DummyWrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  text-align: center;
  margin: 0 10vw;
`;

const UserSearchComponent = styled(StyledListBox)`
  position: fixed;
  background-color: orange;
`;

const TopBtn = styled(StyledListBox)`
  position: fixed;
  bottom: 0;
  right: 10px;
`;

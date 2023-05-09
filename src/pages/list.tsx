import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { TopIcon } from '@/assets/icons';
import SearchInput from '@/components/SearchInput';
import { ListBox } from '@/components/list';
import { StyledListContainer } from '@/components/list/styles';
import useSearchProducts from '@/hooks/useSearchProduct';
import { Product } from '@/types/product';

const ListPage = () => {
  const userSearch = '강아지 인형';
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
    <ListWrapper>
      <FixedWrapper>
        <BtnWrapper>
          <TopBtn type='TopBtn' onClick={() => topBtnHandler()} />
        </BtnWrapper>
      </FixedWrapper>
      <ListBoxWrapper>
        <MarginBox margin='15px' />
        <SearchInput />
        <MarginBox margin='32px' />

        {/* <div>검색어 : {userSearch}</div> */}
        {products.map(product => (
          <ListBox
            key={`${product.productId} key`}
            product={product}
            listClickHandler={listClickHandler}
          />
        ))}
        <StyledListContainer ref={ref} onClick={() => fetchNextPage()}>
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
        </StyledListContainer>
      </ListBoxWrapper>
    </ListWrapper>
  );
};

export default ListPage;

const ListBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MarginBox = styled.div<{ margin: string }>`
  height: ${props => props.margin};
`;

const TopBtn = styled(TopIcon)`
  cursor: pointer;
  position: absolute;
  margin-left: 300px;
`;

const FixedWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  margin-bottom: 60px;
`;

const BtnWrapper = styled.div`
  position: relative;
`;

const ListWrapper = styled.div`
  height: 100%;
`;

import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { TopIcon } from '@/assets/icons';
import SearchInput from '@/components/SearchInput';
import { useSearchDispatch, useSearchStore } from '@/components/SearchProvider';
import { ListBox } from '@/components/list';
import { StyledListContainer } from '@/components/list/styles';
import ChoseProductModal from '@/components/modal/ChoseProductModal';
import useSearchProducts from '@/hooks/useSearchProduct';
import { Product } from '@/types/product';

const ListPage = () => {
  const router = useRouter();
  const [userSearch, setUserSearch] = useState('강아지');
  const [showModal, setShowModal] = useState(false);
  const [userSelected, setUserSelected] = useState<Product>();
  const { products, queryRes } = useSearchProducts(userSearch);
  const { ref, inView } = useInView();
  const { fetchNextPage, isLoading, hasNextPage, isFetching } = queryRes;

  const dispatch = useSearchDispatch();
  // MEMO: 잘 들어갔는지 확인을 위해 임시로 Store 객체를 불러왔습니다.
  const state = useSearchStore();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  useEffect(() => {
    // if (state) console.log(state);
  }, [state]);

  if (isLoading || products === undefined) return <p>로딩중..</p>;

  const listClickHandler = (product: Product) => {
    setUserSelected(product);
    setShowModal(true);
  };

  const topBtnHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = () => {
    if (!userSelected) return;

    dispatch({
      type: 'ADD_PRODUCT',
      item: userSelected,
    });
    // router.push('/result');
  };

  const onClose = () => setShowModal(false);

  return (
    <Container>
      <FixedWrapper>
        <BtnWrapper>
          <TopBtn type='TopBtn' onClick={() => topBtnHandler()} />
        </BtnWrapper>
      </FixedWrapper>
      <ListBoxWrapper>
        <MarginBox margin='15px' />
        <SearchInput />
        <MarginBox margin='32px' />

        <form onSubmit={onSubmit}>
          {products.map(product => (
            <ListBox
              key={`${product.productId} key`}
              product={product}
              listClickHandler={listClickHandler}
            />
          ))}
          {showModal && userSelected && (
            <ChoseProductModal
              onClose={onClose}
              onSubmit={onSubmit}
              title={userSelected.title}
              image={userSelected.image}
            />
          )}
        </form>
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
    </Container>
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

const Container = styled.div`
  height: 100%;
`;

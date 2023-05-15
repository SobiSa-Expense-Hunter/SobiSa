import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import * as SVG from '@/assets/icons';
import { useSearchDispatch } from '@/components/SearchProvider';
import MarginBox from '@/components/common/marginBox';
import { Centering } from '@/components/layout/AppLayout';
import ChoseProductModal from '@/components/modal/ChoseProductModal';
import useSearchProducts from '@/hooks/useSearchProduct';

import ListBox from './ListBox';
import Loading from './Loading';
import { LoadingSpinner } from './styles';
import type { Product } from '@/types/search';

const NotFound = dynamic(() => import('@/components/list/NotFound'));
const SearchInput = dynamic(() => import('@/components/SearchInput'));

const List = () => {
  const router = useRouter();
  const [userSearch, setUserSearch] = useState('강아지');
  const [showModal, setShowModal] = useState(false);
  const [userSelected, setUserSelected] = useState<Product>();
  const { products, queryRes } = useSearchProducts(userSearch);
  const { ref, inView } = useInView();

  const dispatch = useSearchDispatch();

  const { fetchNextPage, isLoading, hasNextPage, isFetching } = queryRes;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading || products === undefined) return <Loading />;
  if (products.length === 0)
    return (
      <Centering>
        <MarginBox margin='15px' />
        <SearchInput />
        <MarginBox margin='32px' />
        <NotFound />
      </Centering>
    );

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
    // MEMO: 이후 연결 할 때 사용 할 라우터 입니다.
    // router.push('/result');
  };

  const onClose = () => setShowModal(false);

  return (
    <>
      <FixedWrapper>
        <BtnWrapper>
          <TopBtn type='button' onClick={() => topBtnHandler()} />
        </BtnWrapper>
      </FixedWrapper>

      <Centering>
        <MarginBox margin='15px' />
        <SearchInput />
        <MarginBox margin='32px' />

        {products.length === 0 && <NotFound />}
        <form onSubmit={onSubmit}>
          {products.map(product => (
            <ListBox
              key={`${product.productId} key`}
              product={product}
              listClickHandler={listClickHandler}
            />
          ))}

          {showModal && userSelected?.title && userSelected.image && (
            <ChoseProductModal
              onClose={onClose}
              onSubmit={onSubmit}
              title={userSelected.title}
              image={userSelected.image}
            />
          )}
        </form>

        <div ref={ref} />
        {isFetching && hasNextPage && (
          <Centering>
            <LoadingSpinner />
          </Centering>
        )}
      </Centering>
    </>
  );
};

export default List;

const TopBtn = styled(SVG.TopIcon)`
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

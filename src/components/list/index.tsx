import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import * as SVG from '@/assets/icons';
import { Indicator02 } from '@/assets/indicator';
import { useSearchDispatch } from '@/components/SearchProvider';
import MarginBox from '@/components/common/marginBox';
import { Centering } from '@/components/layout/AppLayout';
import ChoseProductModal from '@/components/modal/ChoseProductModal';

import ListBox from './ListBox';
import { LoadingSpinner } from './styles';
import type { NaverProductResponse } from '@/types/naverShopApi';
import type { Product } from '@/types/product';
import type { UseInfiniteQueryResult } from '@tanstack/react-query';

const NotFound = dynamic(() => import('@/components/list/NotFound'));
const SearchInput = dynamic(() => import('@/components/SearchInput'));
const Loading = dynamic(() => import('./Loading'));

export interface ListPageProps {
  products: Product[];
  queryRes: UseInfiniteQueryResult<NaverProductResponse, Error>;
}

const List = ({ products, queryRes }: ListPageProps) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [userSelected, setUserSelected] = useState<Product>();

  const { ref, inView } = useInView();

  const dispatch = useSearchDispatch();

  const { fetchNextPage, isLoading, hasNextPage, isFetching, isError } = queryRes;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading || products === undefined)
    return (
      <ListLayout>
        <Loading />
      </ListLayout>
    );

  if (products.length === 0 || isError)
    return (
      <ListLayout>
        <NotFound />
      </ListLayout>
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

    router.push('/result');
  };

  const onClose = () => setShowModal(false);

  return (
    <>
      <FixedWrapper>
        <BtnWrapper>
          <TopBtn type='button' onClick={() => topBtnHandler()} />
        </BtnWrapper>
      </FixedWrapper>

      <ListLayout>
        <>
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
        </>
      </ListLayout>
    </>
  );
};

export default List;

function ListLayout({ children }: { children: React.ReactElement }) {
  return (
    <Centering>
      <MarginBox margin='15px' />
      <SearchInput />
      <MarginBox margin='32px' />
      {children}
      <Indicator02 />
    </Centering>
  );
}

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

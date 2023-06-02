import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

import * as SVG from '@/assets/Icons';
import { useSearchDispatch } from '@/components/SearchProvider';
import MarginBox from '@/components/common/marginBox';
import ListBox from '@/components/list/ListBox';
import LoadingSpinner from '@/components/list/LoadingSpinner';
import * as Style from '@/components/list/styles';
import ChoseProductModal from '@/components/modal/ChoseProductModal';

import type { NaverProductResponse } from '@/types/naverShopApi';
import type { Product } from '@/types/product';
import type { UseInfiniteQueryResult } from '@tanstack/react-query';

const SearchInput = dynamic(() => import('@/components/SearchInput'));
const NotFound = dynamic(() => import('@/components/list/NotFound'));
export interface ListPageProps {
  products: Product[];
  queryRes: UseInfiniteQueryResult<NaverProductResponse, Error>;
}

const List = ({ products, queryRes }: ListPageProps) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [userSelected, setUserSelected] = useState<Product>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();
  const dispatch = useSearchDispatch();

  const { fetchNextPage, isLoading, hasNextPage, isFetching, isError } = queryRes;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading || products === undefined)
    return (
      <ListLayout>
        <Style.JustifyCenter>
          <LoadingSpinner />
        </Style.JustifyCenter>
      </ListLayout>
    );

  if (isError || products.length === 0)
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
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = () => {
    if (!userSelected) return;

    dispatch({
      type: 'ADD_PRODUCT',
      item: { ...userSelected, initTitle: userSelected.title },
    });

    router.push('/keyword');
  };

  const onClose = () => setShowModal(false);

  return (
    <>
      <Style.Fixed>
        <Style.TopBtn type='button' onClick={() => topBtnHandler()}>
          <SVG.TopIcon />
        </Style.TopBtn>
      </Style.Fixed>

      <ListLayout>
        <Style.Scroll ref={scrollRef}>
          <form onSubmit={onSubmit}>
            {products.map(product => (
              <ListBox
                key={`${product.productId}`}
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
            <Style.ListBoxSize>
              <LoadingSpinner />
            </Style.ListBoxSize>
          )}
        </Style.Scroll>
      </ListLayout>
      <MarginBox margin='10px' />
    </>
  );
};

export default List;

export function ListLayout({ children }: { children: React.ReactElement }) {
  return (
    <Style.JustifyFlexStart>
      <MarginBox margin='15px' />
      <SearchInput />
      <MarginBox margin='32px' />
      {children}
    </Style.JustifyFlexStart>
  );
}

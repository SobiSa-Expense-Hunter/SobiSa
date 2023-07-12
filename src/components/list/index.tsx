import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

import * as SVG from '@/assets/Icons';
import { useSearchDispatch } from '@/components/SearchProvider';
import * as Layout from '@/components/common/layout';
import ListBox from '@/components/list/ListBox';
import LoadingSpinner from '@/components/list/LoadingSpinner';
import * as Style from '@/components/list/styles';
import ChoseProductModal from '@/components/modal/ChoseProductModal';
import useSearchProducts from '@/hooks/useSearchProduct';

import type { NaverProductResponse } from '@/types/naverShopApi';
import type { Product } from '@/types/product';
import type { UseInfiniteQueryResult } from '@tanstack/react-query';

const SearchInput = dynamic(() => import('@/components/common/SearchInput'));
const CustomError = dynamic(() => import('@/components/common/error'));
export interface ListPageProps {
  products: Product[];
  queryRes: UseInfiniteQueryResult<NaverProductResponse, Error>;
}

const List = ({ search }: { search: string }) => {
  const router = useRouter();
  const { products, queryRes } = useSearchProducts(search);
  const [isShowModal, setIsShowModal] = useState(false);
  const [userSelected, setUserSelected] = useState<Product>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView: isInView } = useInView();
  const dispatch = useSearchDispatch();

  const { fetchNextPage, isLoading, hasNextPage, isFetching, isError } = queryRes;

  useEffect(() => {
    if (isInView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, isInView]);

  if (isLoading || products === undefined)
    return (
      <ListLayout>
        <Layout.VStack width='100%' height='100%' alignItems='center' justifyContent='center'>
          <LoadingSpinner />
        </Layout.VStack>
      </ListLayout>
    );

  if (isError || products.length === 0)
    return (
      <ListLayout>
        <CustomError
          mainTitle='정말 그걸 검색하신 게 맞나요?'
          subTextLines={[
            '검색하신 물건과 관련된 결과가 하나도 없습니다!',
            '오타를 내신 건 아닌가요?',
          ]}
          buttonText='이전으로'
        />
      </ListLayout>
    );

  const listClickHandler = (product: Product) => {
    setUserSelected(product);
    setIsShowModal(true);
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

  const onClose = () => setIsShowModal(false);

  return (
    <>
      <Layout.Fixed style={{ bottom: '26px' }}>
        <Style.TopBtn type='button' onClick={() => topBtnHandler()}>
          <SVG.TopIcon />
        </Style.TopBtn>
      </Layout.Fixed>

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

            {isShowModal && userSelected?.title && userSelected.image && (
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
            <Layout.Flex
              width='310px'
              maxHeight='151px'
              justifyContent='center'
              alignItems='center'
            >
              <LoadingSpinner />
            </Layout.Flex>
          )}
        </Style.Scroll>
      </ListLayout>
      <Layout.Box height='10px' />
    </>
  );
};

export default List;

function ListLayout({ children }: { children: React.ReactElement }) {
  return (
    <Layout.VStack height='100%' alignItems='center' width='100%'>
      <Layout.Box height='32px' />
      <SearchInput />
      <Layout.Box height='15px' />
      {children}
    </Layout.VStack>
  );
}

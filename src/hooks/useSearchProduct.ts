import { useEffect, useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { IMG_FILTER, SORT } from '@/constant/list';
import { getProductsApi } from '@/utils/api';

import type { APIParams, NaverProductResponse } from '@/types/naverShopApi';
import type { Product } from '@/types/product';

const initialVal: Product[] = [];

function useSearchProducts(userSearch: string) {
  // 임의로 설정해둔 params 필터
  const params: APIParams = {
    query: userSearch,
    display: 10,
    sort: SORT.SIM,
    filter: IMG_FILTER.SMALL,
  };

  const [products, setProducts] = useState<Product[]>([]);
  const queryRes = useInfiniteQuery<NaverProductResponse, Error>({
    queryKey: ['products', params],
    queryFn: ({ pageParam = 1 }) => {
      return getProductsApi({ ...params, start: pageParam + 10 });
    },
    getNextPageParam: lastPage => lastPage.start ?? undefined,
  });

  const { data: originDatas } = queryRes;

  useEffect(() => {
    if (originDatas !== undefined) {
      setProducts(
        originDatas.pages.reduce((acc, page) => {
          const processedPageData = page.items.map(item => {
            const tmpProduct: Product = {
              productId: item.productId,
              title: item.title.replaceAll('<b>', '').replaceAll('</b>', ''),
              image: item.image,
              price: Number(item.lprice),
            };
            return tmpProduct;
          });
          return [...acc, ...processedPageData];
        }, initialVal),
      );
    }
  }, [originDatas]);

  return { products, queryRes };
}

export default useSearchProducts;

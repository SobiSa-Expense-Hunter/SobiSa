import { useEffect, useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import { IMG_FILTER, SORT } from '@/constant/list';
import { getProductsApi } from '@/utils/api';

import type { APIParams, NaverProductResponse } from '@/types/naverShopApi';
import type { Product } from '@/types/product';

const initialVal: Product[] = [];

function useSearchProducts(userSearch: string) {
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
              productId: `${item.productId} ${uuidv4()}`,
              title: item.title.replaceAll('<b>', '').replaceAll('</b>', ''),
              image: item.image,
              price: Number(item.lprice),
              brand: item.brand,
              category1: item.category1,
              category2: item.category2,
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

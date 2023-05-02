import { useEffect, useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { IMG_FILTER, SORT } from '@/constant/list';
import { getProductsApi } from '@/utils/api';

import type { APIParams } from './searchType';
import type { NaverProductResponse, Product } from '@/constant/type';

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

  const { data: datas } = queryRes;

  useEffect(() => {
    if (datas !== undefined) {
      setProducts(
        datas.pages.reduce((acc, page) => {
          const processedPageData = page.items.map(item => {
            const tmpProduct: Product = {
              productId: item.productId,
              title: item.title,
              image: item.image,
              price: Intl.NumberFormat().format(Number(item.lprice)),
            };
            return tmpProduct;
          });
          return [...acc, ...processedPageData];
        }, initialVal),
      );
    }
  }, [datas]);

  return { products, queryRes };
}

export default useSearchProducts;

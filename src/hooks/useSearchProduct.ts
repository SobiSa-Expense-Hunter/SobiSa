import { useEffect, useState } from 'react';

import { UseQueryResult, useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { IMG_FILTER, SORT } from '@/constant/list';
import { getProductsApi } from '@/utils/api';

import type { APIParams } from './searchType';
import type { NaverProductResponse, Product } from '@/constant/type';

const initialVal: Product[] = [
  {
    title: '',
    image: '',
    price: '',
    productId: '',
  },
];

function useSearchProduct(userSearch: string) {
  const params: APIParams = {
    query: userSearch || '빵',
    display: 10,
    sort: SORT.SIM,
    filter: IMG_FILTER.SMALL,
  };
  const [products, setProducts] = useState<Product[]>();
  const { data: datas, isLoading }: UseQueryResult<NaverProductResponse, Error> = useQuery({
    queryKey: ['products', params],
    queryFn: () => getProductsApi(params),
  });

  // const {data, } = useInfiniteQuery(['products'],async (params:type) => {

  // })

  useEffect(() => {
    if (datas !== undefined) {
      setProducts(
        datas.items.reduce((acc, cur, idx) => {
          const tmpProduct: Product = {
            productId: cur.productId,
            title: cur.mallName + cur.category3,
            image: cur.image,
            price: Intl.NumberFormat().format(Number(cur.lprice)),
          };
          acc[idx] = tmpProduct;
          return acc;
        }, initialVal),
      );
    }
  }, [datas]);

  return { products, isLoading };
}

export default useSearchProduct;

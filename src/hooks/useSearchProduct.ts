import { useEffect, useState } from 'react';

import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { getProductsApi } from '@/utils/api';

import type { NaverProductResponse, Product } from '@/constant/type';

const initialVal: Product[] = [
  {
    title: '',
    image: '',
    price: 0,
  },
];

function useSearchProduct(userSearch: string) {
  const [products, setProducts] = useState<Product[]>();
  const { data: datas, isLoading }: UseQueryResult<NaverProductResponse, Error> = useQuery({
    queryKey: ['products', userSearch],
    queryFn: () => getProductsApi(userSearch),
  });

  useEffect(() => {
    if (datas !== undefined) {
      setProducts(
        datas.items.reduce((acc, cur, idx) => {
          const tmpProduct: Product = {
            title: cur.title,
            image: cur.image,
            price: Number(cur.price),
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

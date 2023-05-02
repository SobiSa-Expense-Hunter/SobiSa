import { useEffect, useState } from 'react';

import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { getProductsApi } from '@/utils/api';

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

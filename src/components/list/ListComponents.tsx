import { useEffect, useState } from 'react';

import { getProductsApi } from '@/utils/api';

import type { NaverProductResponse } from '@/constant/type';

const ListComponents = () => {
  const [data, setData] = useState<NaverProductResponse[]>();

  useEffect(() => {
    getProductsApi('').then(res => setData(res));
  }, []);

  return <div />;
};

export default ListComponents;

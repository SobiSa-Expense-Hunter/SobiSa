import axios from 'axios';

import type { APIParams, NaverProductResponse } from '@/types/naverShopApi';

const getProductsApi = async (params: APIParams) => {
  const { data }: { data: NaverProductResponse } = await axios.get('/api/products', { params });
  return data;
};

export default getProductsApi;

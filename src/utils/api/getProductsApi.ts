import axios from 'axios';

import type { NaverProductResponse } from '@/constant/type';

const URL = '/v1/search/shop.json';
const SORT = { SIM: 'sim', DATE: 'date' } as const;
const IMG_FILTER = { ALL: 'all', LARGE: 'large', MIDIUM: 'medium', SMALL: 'small' } as const;

const getProductsApi = async (userInput: string) => {
  // TO-DO: React query 적용 후 userInput을 담을 queryKey 설정
  // const [_, userInput] = queryKey;
  try {
    const { data }: { data: NaverProductResponse[] } = await axios.get(URL, {
      params: {
        query: userInput || '아무거나',
        display: 10,
        sort: SORT.SIM,
        filter: IMG_FILTER.ALL,
      },
      headers: {
        'X-Naver-Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_CLIENT_SECRET,
      },
    });

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default getProductsApi;

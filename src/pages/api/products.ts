import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { SHOP_URL } from '@/constant/list';

import type { NaverProductResponse } from '@/types/naverShopApi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data }: { data: NaverProductResponse } = await axios.get(SHOP_URL, {
      params: req.query,
      headers: {
        'X-Naver-Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_CLIENT_SECRET,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.end(err);
  }
}

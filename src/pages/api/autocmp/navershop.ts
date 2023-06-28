/* eslint-disable no-plusplus */
import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = `https://shopping.naver.com/api/modules/gnb/auto-complete?_vc_=396951197&&keyword=${encodeURIComponent(
      req.query.text as string,
    )}`;
    const { data } = await axios.get(url);
    return res.status(200).json(data);
  } catch (error) {
    return res.end().json(error);
  }
}

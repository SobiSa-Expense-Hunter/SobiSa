/* eslint-disable no-plusplus */
import axios from 'axios';

import { NaverMainAutoCmp } from '@/types/autoCmp';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = `https://ac.search.naver.com/nx/ac?q=${encodeURIComponent(
      req.query.text as string,
    )}&con=1&frm=nv&ans=2&r_format=json&r_enc=UTF-8&r_unicode=0&t_koreng=1&run=2&rev=4&q_enc=UTF-8&st=100&_callback=_jsonp_2`;
    const { data } = await axios.get(url);
    return res.status(200).json(getJson(data));
  } catch (error) {
    return res.end().json(error);
  }
}

function getJson(data: string): NaverMainAutoCmp {
  const JSONIdx = {
    start: 0,
    end: 0,
  };

  const bracketOpen = '{';
  const bracketClose = '}';

  for (let idx = 0; idx < data.length; idx++) {
    if (data[idx] === bracketOpen) JSONIdx.start = idx;
    if (data[idx] === bracketClose) JSONIdx.end = idx;
  }

  return JSON.parse(data.slice(JSONIdx.start, JSONIdx.end + 1));
}

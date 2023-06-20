/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { getNaverShopAutoCmp, getNaverMainAutoCmp } from '@/utils/api/getAutoCmp';

import type { NaverMainAutoCmp, NaverShopAutoCmp } from '@/types/autoCmp';

function useAutoCmp(params: string) {
  const [autoCmpList, setAutoCmpList] = useState(['']);

  const AUTO_CMP_MODE = { SHOP: 'naverShop', MAIN: 'naverMain' } as const;
  const mode = AUTO_CMP_MODE.SHOP; // 자동완성 api 모드 설정 부분.

  useEffect(() => {
    if (!params) return;
    fetchData().then(res => setAutoCmpList(makeAutoCmpList(res)));
  }, [params, mode]);

  async function fetchData() {
    let data: NaverShopAutoCmp | NaverMainAutoCmp;
    if (mode === AUTO_CMP_MODE.SHOP) data = await getNaverShopAutoCmp({ text: params });
    else data = await getNaverMainAutoCmp({ text: params });
    return data;
  }

  function makeAutoCmpList(rawData: NaverMainAutoCmp | NaverShopAutoCmp | undefined): string[] {
    if (!rawData) return [];
    let cleanData: string[] = [];

    if ('answer' in rawData) {
      cleanData = rawData.items[0].reduce((acc, data) => {
        acc.push(data[0]);
        return acc;
      }, []);
    } else {
      cleanData = rawData.items[1].reduce<string[]>((acc, item) => {
        acc.push(item[0][0]);
        return acc;
      }, []);
    }

    return cleanData;
  }

  return { autoCmpList };
}

export default useAutoCmp;

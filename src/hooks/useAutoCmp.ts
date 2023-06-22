/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { getNaverShopAutoCmp, getNaverMainAutoCmp } from '@/utils/api/getAutoCmp';

import type { NaverMainAutoCmp, NaverShopAutoCmp } from '@/types/autoCmp';

export const STATE = {
  SUCCESS: 'success',
  LOADING: 'loading',
  ERROR: 'error',
} as const;

function useAutoCmp(params: string) {
  const [autoCmpList, setAutoCmpList] = useState(['']);
  const [state, setState] = useState<(typeof STATE)[keyof typeof STATE]>(STATE.LOADING);

  const AUTO_CMP_MODE = { SHOP: 'naverShop', MAIN: 'naverMain' } as const;
  const mode = AUTO_CMP_MODE.SHOP; // 자동완성 api 모드 설정 부분.

  useEffect(() => {
    if (!params) return;
    /**
     * !DESCRIBE : 로딩스피너가 너무 빠르게 동작하면 깜빡거리듯 보여지기에 0.5초가 지나고 로딩 상태로 변경
     */
    const loadingTimeout = setTimeout(() => setState(STATE.LOADING), 500);

    try {
      fetchData().then(res => {
        setAutoCmpList(makeAutoCmpList(res).slice(0, 8));
        clearTimeout(loadingTimeout);
        setState(STATE.SUCCESS);
      });
    } catch (error) {
      clearTimeout(loadingTimeout);
      setState(STATE.ERROR);
    }
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

  return { autoCmpList, state };
}

export default useAutoCmp;

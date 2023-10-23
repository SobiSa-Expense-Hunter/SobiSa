/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';

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

    let debounceLoadingSpinner: ReturnType<typeof setTimeout>;
    let debounceParams: ReturnType<typeof setTimeout>;

    try {
      debounceLoadingSpinner = setTimeout(() => setState(STATE.LOADING), 500);
      debounceParams = setTimeout(
        () =>
          fetchData().then(res => {
            setAutoCmpList(makeAutoCmpList(res).slice(0, 8));
            clearTimeout(debounceLoadingSpinner);
            setState(STATE.SUCCESS);
          }),
        1000,
      );
    } catch (error) {
      setState(STATE.ERROR);
    }

    return () => {
      setAutoCmpList(['']);
      clearTimeout(debounceLoadingSpinner);
      clearTimeout(debounceParams);
    };
  }, [params, mode]);

  const fetchData = useCallback(async () => {
    let data: NaverShopAutoCmp | NaverMainAutoCmp;
    if (mode === AUTO_CMP_MODE.SHOP) data = await getNaverShopAutoCmp({ text: params });
    else data = await getNaverMainAutoCmp({ text: params });
    return data;
  }, [params, mode]);

  const makeAutoCmpList = useCallback(
    (rawData: NaverMainAutoCmp | NaverShopAutoCmp | undefined): string[] => {
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
    },
    [params],
  );

  return { autoCmpList, state };
}

export default useAutoCmp;

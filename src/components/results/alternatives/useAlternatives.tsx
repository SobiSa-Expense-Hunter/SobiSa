import { useCallback, useEffect, useState } from 'react';

import { usePapaParse } from 'react-papaparse';

import { ALTERNATIVES_DATA_PATH, EMOJI_PATH } from '@/constant/Alternatives';
import { UserSelected } from '@/types/product';
import { Alternatives, AlternativesCategory, isAlternativesCategoryKey } from '@/types/result';

export interface AlternativeContext {
  data: AlternativeContextSelector;
  isLessThanAlternatives: boolean;
}

export type AlternativeContextSelector = {
  [key in AlternativesCategory]?: Alternatives[];
};

const useAlternatives = (userSelected: UserSelected) => {
  const [alternatives, setAlternatives] = useState<AlternativeContext>({
    data: { necessary: [], funny: [], stable: [] },
    isLessThanAlternatives: false,
  });

  const { readRemoteFile } = usePapaParse();
  const getAlternativesData = useCallback(() => {
    return new Promise<Alternatives[]>((resolve, reject) => {
      readRemoteFile<Alternatives>(ALTERNATIVES_DATA_PATH, {
        complete: results => {
          if (results.errors.length <= 0) {
            resolve(results.data);
          } else {
            reject(results.errors);
          }
        },
        download: true,
        header: true,
      });
    }).then(data =>
      data.map(alternative => {
        return {
          ...alternative,
          image: alternative.image ? `${EMOJI_PATH}${encodeURIComponent(alternative.image)}` : '',
        };
      }),
    );
  }, [readRemoteFile]);

  const {
    product: { price = 0 },
    savingAmount,
  } = userSelected;

  const randomPick = (target: AlternativeContextSelector) => {
    Object.keys(target).forEach(key => {
      if (isAlternativesCategoryKey(key)) {
        target[key]?.sort(() => 0.5 - Math.random());
      }
    });
    // necessary 2개
    // funny 1개
    // stable 1개
    return {
      necessary: target.necessary?.slice(0, 2),
      funny: target.funny?.slice(0, 1),
      stable: target.stable?.slice(0, 1),
    };
  };

  useEffect(() => {
    (async () => {
      const data = await select(await getAlternativesData());
      const isLess = Object.entries(data).every(([, values]) =>
        values.every(obj => obj.price > price),
      );

      const filteredData = () => {
        return isLess
          ? {
              necessary: data.necessary?.filter(obj => obj.price < savingAmount),
              funny: data.funny?.filter(obj => obj.price < savingAmount),
              stable: data.stable?.filter(obj => obj.price > savingAmount),
            }
          : {
              necessary: data.necessary?.filter(obj => obj.price < price),
              funny: data.funny?.filter(obj => obj.price < price),
              stable: data.stable?.filter(obj => obj.price > price),
            };
      };

      setAlternatives({
        ...alternatives,
        isLessThanAlternatives: isLess,
        data: randomPick(filteredData()),
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, savingAmount]);

  return { alternatives, setAlternatives };
};

export default useAlternatives;

// 기회비용 category별 추출
const select = (data: Alternatives[]) =>
  data.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = [];
    acc[curr.category]?.push(curr);
    return acc;
  }, {} as AlternativeContextSelector);

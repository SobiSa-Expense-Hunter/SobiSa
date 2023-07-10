import localforage from 'localforage';
import dynamic from 'next/dynamic';

import { useSearchStore } from '@/components/SearchProvider';
import useAlternatives from '@/components/results/alternatives/useAlternatives';
import { UserSearchHistory } from '@/types/product';

const DynamicResult = dynamic(() => import('@/components/results'), {
  ssr: false,
});

function ResultPage() {
  const userSelected = useSearchStore();
  const { alternatives } = useAlternatives(userSelected, true);

  const savedItem: UserSearchHistory = {
    ...userSelected,
    alternativeTitles: Object.values(alternatives.data).reduce(
      (prev, curr) => [...prev, ...curr.map(item => item.title)],
      [] as string[],
    ),
    searchDate: new Date().toLocaleString(),
  };

  if (userSelected.product.title) localforage.setItem(userSelected.product.title, savedItem);

  return <DynamicResult alternatives={alternatives} userSelected={userSelected} />;
}

export default ResultPage;

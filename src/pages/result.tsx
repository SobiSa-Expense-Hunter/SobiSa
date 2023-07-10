import dynamic from 'next/dynamic';

import { useSearchStore } from '@/components/SearchProvider';
import useAlternatives from '@/components/results/alternatives/useAlternatives';

const DynamicResult = dynamic(() => import('@/components/results'), {
  ssr: false,
});

function ResultPage() {
  const userSelected = useSearchStore();
  const { alternatives } = useAlternatives(userSelected);

  return <DynamicResult alternatives={alternatives} userSelected={userSelected} />;
}

export default ResultPage;

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useSearchStore } from '@/components/SearchProvider';
import Keyword from '@/components/keyword';

const NoticeModal = dynamic(() => import('@/components/modal/NoticeModal'), { ssr: false });

const KeywordPage = () => {
  let devTitle = '';
  if (process.env.NEXT_PUBLIC_ENV_TEST === 'DEV_ENV')
    devTitle = '[멋진 푸바오] 푸바오 푸바오  바오바오 바오';

  const { product } = useSearchStore();

  const allKeyword = Array.from(new Set(cleanTitle(product?.initTitle || devTitle)));

  const router = useRouter();

  if (allKeyword === undefined || allKeyword[0] === '') {
    return (
      <NoticeModal
        onClose={() => router.replace('/list')}
        message='물품이 제대로 선택되지 않았습니다.'
      />
    );
  }

  return <Keyword product={product} allKeyword={allKeyword} />;
};

export default KeywordPage;

function cleanTitle(uncleanTitle: string) {
  const selectBrackets = /\s+|\[|\]/g;
  const selectMultipleSpaces = /\s+/g;

  return uncleanTitle
    .replace(selectBrackets, ' ')
    .replace(selectMultipleSpaces, ' ')
    .trim()
    .split(' ');
}

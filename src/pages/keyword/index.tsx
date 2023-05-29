import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useSearchStore } from '@/components/SearchProvider';
import Keyword from '@/components/keyword';

const NoticeModal = dynamic(() => import('@/components/modal/NoticeModal'), { ssr: false });

const KeywordPage = () => {
  const { product } = useSearchStore();
  const allKeyword = product?.initTitle?.trim().split(' ') || '';

  const router = useRouter();

  if (allKeyword === undefined || allKeyword === '') {
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

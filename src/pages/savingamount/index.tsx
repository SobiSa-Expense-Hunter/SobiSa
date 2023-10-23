import { useEffect, useRef } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useSearchStore } from '@/components/SearchProvider';
import SavingAmount from '@/components/savingamount';

const NoticeModal = dynamic(() => import('@/components/modal/NoticeModal'), { ssr: false });

const SavingAmountPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { product } = useSearchStore();

  const router = useRouter();

  useEffect(() => inputRef?.current?.focus(), []);

  if (!product.title) {
    return (
      <NoticeModal
        onClose={() => router.replace('/list')}
        message='물품이 제대로 선택되지 않았습니다.'
      />
    );
  }

  return <SavingAmount />;
};

export default SavingAmountPage;

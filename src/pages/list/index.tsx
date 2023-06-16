import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import List from '@/components/list';
import NoticeModal from '@/components/modal/NoticeModal';
import useNoticeModal from '@/hooks/useNoticeModal';

function ListPage() {
  const router = useRouter();
  const { search } = router.query;

  const { modalState, dispatchModalState } = useNoticeModal();
  const [clearSearch, setClearSearch] = useState('');

  useEffect(() => {
    try {
      setClearSearch(isString(search));
    } catch (error) {
      if (!(error instanceof Error)) return;
      dispatchModalState({ type: 'SHOW', message: error.message });
    }
  }, [dispatchModalState, search]);

  const onClose = () => {
    router.push('/');
    dispatchModalState({ type: 'HIDE' });
  };

  if (modalState.show) return <NoticeModal onClose={onClose} message={modalState.message} />;

  return <List search={clearSearch} />;
}

export default ListPage;

function isString(value: unknown): string {
  if (typeof value !== 'string') throw new Error('검색어를 입력해주세요.');
  return value;
}

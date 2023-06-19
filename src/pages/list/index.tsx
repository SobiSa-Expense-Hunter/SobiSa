/* eslint-disable react-hooks/exhaustive-deps */
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
    if (isString(search)) setClearSearch(search);
    else dispatchModalState({ type: 'SHOW', message: '검색어를 입력해주세요.' });
  }, []);

  const onClose = () => {
    router.push('/');
    dispatchModalState({ type: 'HIDE' });
  };

  if (modalState.show) return <NoticeModal onClose={onClose} message={modalState.message} />;

  return <List search={clearSearch} />;
}

export default ListPage;

function isString(value: unknown): value is string {
  if (typeof value === 'string') return true;
  return false;
}

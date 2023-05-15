import { useRouter } from 'next/router';

import List from '@/components/list';
import useSearchProducts from '@/hooks/useSearchProduct';

function ListPage() {
  const router = useRouter();
  let { search } = router.query;

  if (Array.isArray(search) || !search) search = '';
  const { products, queryRes } = useSearchProducts(search);

  // TO-DO : SEARCH BAR 공백 예외 처리
  return <List products={products} queryRes={queryRes} />;
}

export default ListPage;

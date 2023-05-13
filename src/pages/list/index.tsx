import { useRouter } from 'next/router';

import List from '@/components/list';
import useSearchProducts from '@/hooks/useSearchProduct';

function ListPage() {
  const router = useRouter();
  let { search } = router.query;

  if (Array.isArray(search) || search === undefined) search = '';

  const { products, queryRes } = useSearchProducts(search);

  return <List products={products} queryRes={queryRes} />;
}

export default ListPage;

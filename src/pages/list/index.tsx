import { useRouter } from 'next/router';

import List, { ListLayout } from '@/components/list';
import NotFound from '@/components/list/NotFound';
import useSearchProducts from '@/hooks/useSearchProduct';

function ListPage() {
  const router = useRouter();
  let { search } = router.query;
  const reg = /\s/g;

  if (Array.isArray(search) || !search) search = '';
  const { products, queryRes } = useSearchProducts(search);

  // TO-DO: Search Bar에서 공백 제거
  if (!search.replace(reg, ''))
    return (
      <ListLayout>
        <NotFound />
      </ListLayout>
    );

  return <List products={products} queryRes={queryRes} />;
}

export default ListPage;

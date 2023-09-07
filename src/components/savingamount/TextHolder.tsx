import { memo } from 'react';

import * as Layout from '@/components/common/layout';
import * as Style from '@/components/savingamount/styles';

const TextHolder = ({ contents }: { contents: [string, string] }) => {
  const [mainContent, postpositive] = contents;
  return (
    <Layout.HStack alignItems='center' gap='16px'>
      <Style.Span> {mainContent}</Style.Span>
      <Style.KeepAllFont> {postpositive}</Style.KeepAllFont>
    </Layout.HStack>
  );
};

export default memo(TextHolder);

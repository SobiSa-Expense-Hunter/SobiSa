import React from 'react';

import dynamic from 'next/dynamic';

const DynamicResult = dynamic(() => import('@/components/results/index'), {
  ssr: false,
});

function ResultPage() {
  return (
    <div>
      <DynamicResult />
    </div>
  );
}

export default ResultPage;

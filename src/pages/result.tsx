import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

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

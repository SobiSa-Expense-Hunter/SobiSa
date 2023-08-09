import * as Icons from '@/assets/Icons';
import * as Buttons from '@/components/common/buttons';

import type { NextRouter } from 'next/router';

const LeftButton = ({ isHome, router }: { isHome: boolean; router: NextRouter }) => {
  if (isHome)
    return (
      <Buttons.HeaderButton onClick={() => router.push('/about')}>
        <Icons.Info width={14} height={14} />
      </Buttons.HeaderButton>
    );

  return (
    <Buttons.HeaderButton onClick={() => router.back()}>
      <Icons.LeftIcon />
    </Buttons.HeaderButton>
  );
};

export default LeftButton;

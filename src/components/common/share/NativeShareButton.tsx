import React from 'react';

import { NavigatorShareIcon } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

const NativeShareButton = ({ description }: { description: string }) => {
  if (navigator.share === undefined || navigator.canShare() === false) {
    return null;
  }

  const sendData: ShareData = { text: description };

  return (
    <ImageButton
      type='button'
      onClick={() => navigator.share(sendData)}
      style={{ background: '#EAEAEA' }}
    >
      <NavigatorShareIcon />
    </ImageButton>
  );
};

export default NativeShareButton;

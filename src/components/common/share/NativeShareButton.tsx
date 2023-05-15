import React from 'react';

import { LinkIcon } from '@/assets/Icons';
import { ImageButton } from '@/components/common/buttons';

const NativeShareButton = ({ description }: { description: string }) => {
  if (navigator.share === undefined || navigator.canShare() === false) {
    return null;
  }

  const sendData: ShareData = { text: description };

  return (
    <ImageButton type='button' onClick={() => navigator.share(sendData)}>
      <LinkIcon />
    </ImageButton>
  );
};

export default NativeShareButton;

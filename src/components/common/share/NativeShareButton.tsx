import React, { useEffect, useState } from 'react';

import { NavigatorShareIcon } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

interface NativeShareButtonProps {
  sharedMessage: ShareData;
}

const NativeShareButton = ({ sharedMessage }: NativeShareButtonProps) => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    if (!(navigator.share === undefined || navigator.canShare(sharedMessage) === false)) {
      setShow(true);
    }
  }, [sharedMessage]);

  return isShow ? (
    <ImageButton
      type='button'
      onClick={() => navigator.share(sharedMessage)}
      style={{ background: '#EAEAEA' }}
    >
      <NavigatorShareIcon />
    </ImageButton>
  ) : null;
};

export default NativeShareButton;

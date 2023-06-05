import React, { useEffect, useState } from 'react';

import { NavigatorShareIcon } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

const NativeShareButton = ({ description }: { description: string }) => {
  const [show, setShow] = useState(false);
  const sendData: ShareData = { text: description };

  useEffect(() => {
    if (!(navigator.share === undefined || navigator.canShare({ text: description }) === false)) {
      setShow(true);
    }
  }, [description]);

  return show ? (
    <ImageButton
      type='button'
      onClick={() => navigator.share(sendData)}
      style={{ background: '#EAEAEA' }}
    >
      <NavigatorShareIcon />
    </ImageButton>
  ) : null;
};

export default NativeShareButton;

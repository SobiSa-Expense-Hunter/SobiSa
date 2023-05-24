import React, { useEffect, useState } from 'react';

import { LinkIcon } from '@/assets/Icons';
import { ImageButton } from '@/components/common/buttons';

interface LinkButtonProps {
  pageUrl: string;
}

const LinkButton = ({ pageUrl }: LinkButtonProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const shareOnLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      alert('url이 복사되었습니다');
    });
  };

  return show ? (
    <ImageButton type='button' onClick={shareOnLink}>
      <LinkIcon />
    </ImageButton>
  ) : null;
};

export default LinkButton;

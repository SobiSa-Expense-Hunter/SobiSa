import React, { useEffect, useState } from 'react';

import { LinkIcon } from '@/assets/Icons';
import Toast from '@/components/common/Toast';
import { ImageButton } from '@/components/common/buttons';

interface LinkButtonProps {
  pageUrl: string;
}

const LinkButton = ({ pageUrl }: LinkButtonProps) => {
  const [show, setShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const shareOnLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setToastShow(true);
    });
  };

  const toastHide = () => {
    setToastShow(false);
  };

  return show ? (
    <>
      <ImageButton type='button' onClick={shareOnLink}>
        <LinkIcon />
      </ImageButton>
      {toastShow && <Toast msg='url이 복사되었습니다' toastHide={toastHide} />}
    </>
  ) : null;
};

export default LinkButton;

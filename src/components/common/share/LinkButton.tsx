import { useEffect, useState } from 'react';

import { LinkIcon } from '@/assets/Icons';
import Toast from '@/components/common/Toast';
import { ImageButton } from '@/components/common/buttons';

interface LinkButtonProps {
  pageUrl: string;
}

const LinkButton = ({ pageUrl }: LinkButtonProps) => {
  const [isShow, setIsShow] = useState(false);
  const [isToastShow, setIsToastShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const shareOnLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setIsToastShow(true);
    });
  };

  const toastHide = () => {
    setIsToastShow(false);
  };

  return isShow ? (
    <>
      <ImageButton type='button' onClick={shareOnLink}>
        <LinkIcon />
      </ImageButton>
      {isToastShow && <Toast msg='링크가 복사되었습니다' toastHide={toastHide} />}
    </>
  ) : null;
};

export default LinkButton;

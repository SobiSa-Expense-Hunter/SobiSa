import React from 'react';

import { FaceBookIconImg } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

interface FacebookButtonProps {
  pageUrl: string;
}

const FacebookButton = ({ pageUrl }: FacebookButtonProps) => {
  const shareOnFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
  };

  return (
    <ImageButton type='button' onClick={shareOnFacebook} style={{ background: '#1877F2' }}>
      <FaceBookIconImg />
    </ImageButton>
  );
};

export default FacebookButton;

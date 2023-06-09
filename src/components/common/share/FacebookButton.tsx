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
    <ImageButton type='button' onClick={shareOnFacebook}>
      <FaceBookIconImg />
    </ImageButton>
  );
};

export default FacebookButton;

import React from 'react';

import { TwitterIcon } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

interface TwitterButtonProps {
  sendText: string;
  pageUrl: string;
}

const TwitterButton = ({ sendText, pageUrl }: TwitterButtonProps) => {
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`);
  };
  return (
    <ImageButton type='button' onClick={shareOnTwitter}>
      <TwitterIcon />
    </ImageButton>
  );
};

export default TwitterButton;

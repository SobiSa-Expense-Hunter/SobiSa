import React from 'react';

import { LinkIcon } from '@/assets/Icons';
import { ImageButton } from '@/components/common/buttons';

interface LinkButtonProps {
  pageUrl: string;
}

const LinkButton = ({ pageUrl }: LinkButtonProps) => {
  if (!navigator) {
    return null;
  }
  const shareOnLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      alert('copied url');
    });
  };

  return (
    <ImageButton type='button' onClick={shareOnLink}>
      <LinkIcon />
    </ImageButton>
  );
};

export default LinkButton;

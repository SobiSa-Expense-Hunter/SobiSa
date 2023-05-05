import React, { ButtonHTMLAttributes } from 'react';

import { S } from '@/components/common';

const ShareButton = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  return <S.Buttons.ShareButton {...props} />;
};

export default ShareButton;

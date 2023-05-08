import React, { ButtonHTMLAttributes } from 'react';

import { S } from '@/components/common';

const ShareButton = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <S.Buttons.ShareButton {...props} />;
};

export default ShareButton;

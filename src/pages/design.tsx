import React from 'react';

import MainImage from '@/assets/image.svg';
import ItemImage from '@/assets/image_item.svg';
import LineImage from '@/assets/image_line.svg';
import {
  BottomButton,
  ModalButton,
  ModalLongButton,
  ModalSubButton,
  ShareButton,
} from '@/styles/buttons';
import {
  FaceBookIcon,
  KakaoIcon,
  LinkIcon,
  LoadingIcon,
  NoticeIcon,
  TopIcon,
  TwitterIcon,
} from '@/styles/icons';

const design = () => {
  return (
    <div>
      <div>
        <h2>buttons</h2>
        <br />
        <ModalButton>STATIC</ModalButton>
        <ModalSubButton>STATIC</ModalSubButton>
        <br />
        <br />
        <ModalLongButton>STATIC</ModalLongButton>
        <br />
        <br />
        <BottomButton>STATIC</BottomButton>
        <br />
        <br />
        <ShareButton>STATIC</ShareButton>
        <br />
        <br />
      </div>
      <div>
        <h2>Image</h2>
        <MainImage />
        <LineImage />
        <ItemImage />
      </div>
      <div>
        <h2>Icon</h2>
        <NoticeIcon />
        <TopIcon />
        <LoadingIcon />
        <br />
        <FaceBookIcon />
        <TwitterIcon />
        <KakaoIcon />
        <LinkIcon />
      </div>
    </div>
  );
};

export default design;

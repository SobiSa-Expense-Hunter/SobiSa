import React from 'react';

import Image from 'next/image';

const STICKER_PATH = '/assets/stickers';

export const CharacterBlackSticker = () => (
  <Image
    src={`${STICKER_PATH}/sticker_character_black.png`}
    width={86}
    height={86}
    alt='소비사 캐릭터 흑백 스티커'
  />
);

export const CharacterColorSticker = () => (
  <Image
    src={`${STICKER_PATH}/sticker_character_color.png`}
    width={100}
    height={100}
    alt='소비사 캐릭터 컬러 스티커'
  />
);

export const SobisaTextFillLogoSticker = () => (
  <Image
    src={`${STICKER_PATH}/sticker_sobisa_text_logo_fill.svg`}
    width={71}
    height={23}
    alt='소비사 텍스트 로고 스티커'
  />
);

export const SobisaTextLogoSticker = () => (
  <Image
    src={`${STICKER_PATH}/sticker_sobisa_text_logo.png`}
    width={71}
    height={23}
    alt='소비사 텍스트 로고 스티커'
  />
);

export const ExpensiveTextSticker = () => (
  <Image src={`${STICKER_PATH}/sticker_expensive.svg`} width={144} height={32} alt='비싸다' />
);

import React from 'react';
import type { AppProps } from 'next/app';
import StyledComponentsRegistry from '@/lib/registry';
import Script from 'next/script';
import { KakaoSDK } from '@/constant/type';

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const kakaoSDKInit = () => {
    if (window.Kakao.isInitialized() === false) {
      window.Kakao.init(`${process.env.kakaoJavaScriptKey}`);
    }
  };

  return (
    <>
      <Component {...pageProps} />
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'
        integrity='sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx'
        crossOrigin='anonymous'
        onLoad={kakaoSDKInit}
      />
    </>
  );
}

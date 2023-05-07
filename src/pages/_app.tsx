/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { KakaoSDK } from '@/types/result';

import type { AppProps } from 'next/app';

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const kakaoSDKInit = () => {
    if (window.Kakao.isInitialized() === false) {
      window.Kakao.init(`${process.env.kakaoJavaScriptKey}`);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'
          integrity='sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx'
          crossOrigin='anonymous'
          onLoad={kakaoSDKInit}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';

import SearchProvider from '@/components/SearchProvider';
import AppLayout from '@/components/layout/AppLayout';
import * as ga from '@/lib/gtag';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { KakaoSDK } from '@/types/kakaoSDK';

import type { AppProps } from 'next/app';

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  const kakaoSDKInit = () => {
    if (window.Kakao.isInitialized() === false) {
      window.Kakao.init(`${process.env.kakaoJavaScriptKey}`);
    }
  };

  const getContent = () => {
    if ([`/design`].includes(appProps.router.pathname)) {
      return <Component {...pageProps} />;
    }
    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    );
  };

  return (
    <>
      {/* ms-clarity */}
      <Script strategy='afterInteractive' id='ms-clarity'>
        {`
          (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", '${process.env.NEXT_PUBLIC_CLARITY_KEY}');
        `}
      </Script>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {getContent()}
            <ReactQueryDevtools initialIsOpen={false} />
            <Script
              src='https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'
              integrity='sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx'
              crossOrigin='anonymous'
              onLoad={kakaoSDKInit}
            />
          </ThemeProvider>
        </SearchProvider>
      </QueryClientProvider>
    </>
  );
}

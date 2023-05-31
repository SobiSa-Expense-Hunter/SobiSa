/* eslint-disable react/no-danger */
import React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          <Script
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", '${process.env.NEXT_PUBLIC_CLARITY_KEY}');
              `,
            }}
          />
          <Script
            strategy='afterInteractive'
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
            }}
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
            crossOrigin='anonymous'
          />
          <meta property='viewport' content='initial-scale=1.0, width=device-width' />

          <title>소비사!: 소비사냥꾼</title>

          <meta property='apple-mobile-web-app-title' content='소비사!: 소비사냥꾼' />
          <meta property='description' content='당신의 소비를 막아주는 소비사냥꾼' />

          <meta property='og:title' content='소비사!: 소비 사냥꾼' />
          <meta property='og:url' content='https://sobisa.vercel.app/' />
          <meta
            property='og:image'
            content='https://https://sobisa.vercel.app/assets/image/thumbnail_image.png'
          />
          <meta property='og:description' content='당신의 소비를 막아주는 소비사냥꾼' />
          <meta property='og:type' content='website' />

          <meta name='twitter:title' content='소비사!: 소비 사냥꾼' />

          <link rel='apple-touch-icon' sizes='114x114' href='assets/image/sobisa_logo.png' />
        </Head>
        <body>
          <div id='modal-root' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
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
      <Html lang='en'>
        <Head>
          <link
            rel='stylesheet'
            as='style'
            href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
          />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />

          <title>소비사!: 소비사냥꾼</title>

          <meta name='apple-mobile-web-app-title' content='소비사!: 소비사냥꾼' />
          <meta name='description' content='당신의 소비를 막아주는 소비사냥꾼' />

          <meta name='og:title' content='소비사!: 소비 사냥꾼' />
          <meta name='og:url' content='https://sobisa.vercel.app/' />
          <meta name='og:image' content='' />
          <meta name='og:description' content='당신의 소비를 막아주는 소비사냥꾼' />
          <meta name='og:type' content='website' />

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

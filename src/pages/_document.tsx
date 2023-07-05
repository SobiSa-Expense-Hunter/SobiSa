/* eslint-disable react/no-danger */

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
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
      <Html lang='ko'>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
            crossOrigin='anonymous'
          />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap'
            rel='stylesheet'
          />

          <meta property='viewport' content='initial-scale=1.0, width=device-width' />

          <title>소비사!: 소비사냥꾼</title>

          <meta property='apple-mobile-web-app-title' content='소비사!: 소비사냥꾼' />
          <meta property='description' content='그 물건을 사는 대신 뭘 할 수 있을까요?' />

          <meta property='og:title' content='소비사!: 소비 사냥꾼' />
          <meta property='og:url' content='https://sobisa.vercel.app/' />
          <meta
            property='og:image'
            content='https://sobisa.vercel.app/assets/image/thumbnail_image.png'
          />
          <meta property='og:description' content='그 물건을 사는 대신 뭘 할 수 있을까요?' />
          <meta property='og:type' content='website' />

          <meta name='twitter:card' content='summary_large_image' />

          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />
          <link rel='apple-touch-icon' sizes='114x114' href='assets/image/sobisa_logo.png' />
          <link rel='icon' href='assets/image/favicon.png' />
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

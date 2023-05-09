import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          as='style'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <body>
        <div id='modal-root' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

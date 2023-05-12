import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`${css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  @font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`}`;

export default GlobalStyle;

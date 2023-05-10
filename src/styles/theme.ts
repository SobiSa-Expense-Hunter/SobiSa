import { DefaultTheme } from 'styled-components';

const SIZE = {
  mobile: '767px',
} as const;

const theme: DefaultTheme = {
  colors: {
    mainColor: '#FF9D02',
    subColor: '#FFC467',
    gray: {
      0: '#F3F3F3',
      1: '#EAEAEA',
      2: '#CBCBCB',
      3: '#B0B0B0',
      4: '#616161',
      5: '#3D3D3D',
      6: '#242424',
    },
  },
  size: {
    mobile: SIZE.mobile,
  },
  fontSize: {
    xxs: '9pt',
    xs: '10.5pt',
    s: '12pt',
    m: '14pt',
    ml: '15pt',
    l: '16pt',
  },
};

export default theme;

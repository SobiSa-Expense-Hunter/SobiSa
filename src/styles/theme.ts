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
    xxs: '12px',
    xs: '14px',
    s: '16px',
    m: '14px',
    ml: '20px',
    l: '21px',
    xl: '28px',
    xxl: '36px',
  },
};

export default theme;

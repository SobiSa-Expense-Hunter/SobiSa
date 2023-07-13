// styled.d.ts
import type { CreateArrayWithLengthX, NumericRange } from '@/types/rangeTypeGenerater';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainColor: '#FF9D02';
      subColor: '#FFC467';
      gray: {
        0: '#F3F3F3';
        1: '#EAEAEA';
        2: '#CBCBCB';
        3: '#B0B0B0';
        4: '#616161';
        5: '#3D3D3D';
        6: '#242424';
      };
    };
    fontSize: {
      xxxs: '10px';
      xxs: '12px';
      xs: '14px';
      s: '16px';
      m: '14px';
      ml: '20px';
      l: '21px';
      xl: '28px';
      xxl: '36px';
    };
    size: {
      mobile: string;
    };
  }
}

type Size = 's' | 'm' | 'l';
export type GrayRange = NumericRange<CreateArrayWithLengthX<0>, 6>;

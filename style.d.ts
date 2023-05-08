// styled.d.ts
import type { CreateArrayWithLengthX, NumericRange } from '@/types/rangeTypeGenerater';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      subColor: string;
      gray: {
        [key in GrayRange]: string;
      };
    };
    fontSize: {
      [key in Size]: string;
    };
    size: {
      mobile: string;
    };
  }
}

type Size = 's' | 'm' | 'l';
export type GrayRange = NumericRange<CreateArrayWithLengthX<0>, 6>;

/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';

import * as Font from '@/styles/font';

import * as Styled from './style';

/**
 *
 * @param arrowPosition : "top" | "bottom" | undefined
 * @param arrowAlign : "left" | "right" | undefined
 * @description 툴팁 화살표의 방향을 설정할 수 있음.
 */
const ToolTip = ({ children, arrowPosition, arrowAlign }: ToolTipProps) => {
  return (
    <Styled.Background padding='5px 10px' alignItems='center' gap='10px' width='100%' height='auto'>
      <Font.Small style={{ color: 'white' }}>{children}</Font.Small>
      <Styled.Arrow arrowAlign={arrowAlign} arrowPosition={arrowPosition} />
    </Styled.Background>
  );
};

interface ToolTipProps {
  children: ReactNode;
  arrowPosition?: keyof typeof ArrowPosition;
  arrowAlign?: keyof typeof ArrowAlign;
}

export const enum ArrowPosition {
  top,
  bottom,
}

export const enum ArrowAlign {
  left,
  right,
}

export default ToolTip;

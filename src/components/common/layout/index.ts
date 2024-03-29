/* eslint-disable import/no-cycle */
import ScrollContainer from 'react-indiana-drag-scroll';
import styled, { css } from 'styled-components';

export interface FlexProps extends SizeAndMarginAndPaddingProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  flexWrap?: 'nowrap' | 'wrap';
  gap?: string;
  flex?: 0 | 1;
}

interface SizeAndMarginAndPaddingProps {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
}

const SizeAndMarginAndPaddingProperty = css<SizeAndMarginAndPaddingProps>`
  position: ${({ position }) => position || 'static'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  margin: ${({ margin }) => margin || ''};
  padding: ${({ padding }) => padding || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  min-height: ${({ minHeight }) => minHeight || ''};
`;

const FlexProperty = css<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  align-items: ${({ alignItems }) => alignItems || ''};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  flex-direction: ${({ flexDirection }) => flexDirection || ''};
  flex: ${({ flex }) => flex || ''};
`;

export const Flex = styled.div<FlexProps>`
  ${FlexProperty}
  ${SizeAndMarginAndPaddingProperty}
`;

export const VStack = styled(Flex)`
  flex-direction: column;
`;

export const HStack = styled(Flex)`
  flex-direction: row;
`;

export const Fixed = styled.div`
  position: fixed;
`;

export const Box = styled.div<SizeAndMarginAndPaddingProps>`
  display: block;
  ${SizeAndMarginAndPaddingProperty}
`;

export const HScroll = styled(ScrollContainer)`
  display: flex;
  overflow: hidden;
  word-break: keep-all;
  flex-direction: row;
  width: 100%;
  max-width: 310px;
  gap: 6px;
`;

export { default as FixButtonBottom } from '@/components/common/layout/FixButtonBottom';

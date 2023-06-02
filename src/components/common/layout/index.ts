import styled, { css } from 'styled-components';

interface FlexProps extends BoxProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'center' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  flexWrap?: 'nowrap' | 'wrap';
  gap?: string;
}

interface BoxProps {
  display?: 'none' | 'block' | 'inline' | 'inline-block' | 'flex';
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

const SizeAndMarginAndPaddingProperty = css<FlexProps>`
  width: ${({ width }) => width || 'none'};
  height: ${({ height }) => height || 'none'};
  margin: ${({ margin }) => margin || 'none'};
  padding: ${({ padding }) => padding || 'none'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
`;

const FlexProperty = css<FlexProps>`
  justify-content: ${({ justifyContent }) => justifyContent || 'none'};
  align-items: ${({ alignItems }) => alignItems || 'none'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
`;

export const VStack = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;

  ${FlexProperty}
  ${SizeAndMarginAndPaddingProperty}
`;

export const HStack = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;

  ${FlexProperty}
  ${SizeAndMarginAndPaddingProperty}
`;

export const Fixed = styled.div`
  position: fixed;
`;

export const Box = styled.div<FlexProps>`
  display: ${({ display }) => display || 'block'};

  ${FlexProperty}
  ${SizeAndMarginAndPaddingProperty}
`;

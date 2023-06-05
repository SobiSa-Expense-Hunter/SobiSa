import styled, { css } from 'styled-components';

interface FlexProps extends SizeAndMarginAndPaddingProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'center' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  flexWrap?: 'nowrap' | 'wrap';
  gap?: string;
}

interface SizeAndMarginAndPaddingProps {
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
  display: 'block';
  ${SizeAndMarginAndPaddingProperty}
`;

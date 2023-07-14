import styled from 'styled-components';

import * as Layout from '@/components/common/layout';

import type { ArrowAlign, ArrowPosition } from '@/components/common/tooltip';

const backgroundColor = `#242424`;

const ArrowSize = `9px`;

export const Background = styled(Layout.Flex)`
  position: absolute;
  display: inline-flex;
  width: fit-content;
  border-radius: 4px;
  background: ${backgroundColor};
`;

export const Arrow = styled.div<{
  arrowPosition: keyof typeof ArrowPosition | undefined;
  arrowAlign: keyof typeof ArrowAlign | undefined;
}>`
  content: ' ';

  position: absolute;
  border-left: ${ArrowSize} solid transparent;

  top: ${({ arrowPosition }) => {
    if (arrowPosition === `top`) return `-${ArrowSize}`;
    if (arrowPosition === `bottom`) return `100%`;
    return '';
  }};

  right: ${({ arrowAlign }) => {
    if (arrowAlign === `left`) return '';
    if (arrowAlign === `right`) return `10%`;
    return '';
  }};

  border-bottom: ${({ arrowPosition }) => {
    if (arrowPosition === `bottom`) return `9px solid transparent`;
    return '';
  }};

  border-top: ${({ arrowPosition }) => {
    if (arrowPosition === `top`) return `9px solid transparent`;
    return '';
  }};

  border-right: ${({ arrowAlign }) => {
    if (arrowAlign === `right`) return `9px solid ${backgroundColor}`;
    return `9px solid transparent`;
  }};

  border-left: ${({ arrowAlign }) => {
    if (arrowAlign === `left`) return `9px solid ${backgroundColor}`;
    return `9px solid transparent`;
  }};
`;

/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import type { ReactNode } from 'react';

import * as Layout from '@/components/common/layout';

import type { FlexProps } from './index';

type FlexPropsType<T extends FlexProps> = {
  [K in keyof T]: T[K] | undefined;
};

function FixButtonBottom({
  children,
  ...flexProps
}: { children: ReactNode } & FlexPropsType<FlexProps>) {
  return (
    <Layout.VStack
      height='100%'
      width='100%'
      maxWidth='310px'
      maxHeight='812px'
      justifyContent='space-between'
      style={{ overflowX: 'hidden', overflowY: 'auto' }}
      {...(flexProps as FlexProps)}
    >
      {children}
    </Layout.VStack>
  );
}

export default FixButtonBottom;

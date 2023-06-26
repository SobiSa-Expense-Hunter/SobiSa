import type { Dispatch, SetStateAction } from 'react';

import { v4 as uuid } from 'uuid';

import * as Layout from '@/components/common/layout/index';
import LoadingSpinner from '@/components/list/LoadingSpinner';
import { STATE } from '@/hooks/useAutoCmp';
import * as Font from '@/styles/font';

import * as Style from './style';

interface AutoCmpProps {
  autoCmpList: string[];
  setSearch: Dispatch<SetStateAction<string>>;
  state: (typeof STATE)[keyof typeof STATE];
}

function AutoCmpContainer({ autoCmpList, setSearch, state }: AutoCmpProps) {
  return (
    <Style.Relative>
      <Style.Absolute>
        {state === STATE.SUCCESS &&
          autoCmpList.map(autoCmp => {
            return (
              <Style.AutoCmp
                justifyContent='center'
                key={uuid()}
                onMouseDown={() => setSearch(autoCmp)}
              >
                <Font.Medium>{autoCmp}</Font.Medium>
              </Style.AutoCmp>
            );
          })}

        {state === STATE.LOADING && (
          <Layout.VStack alignItems='center' justifyContent='center'>
            <LoadingSpinner />
          </Layout.VStack>
        )}

        {state === STATE.ERROR && (
          <Style.AutoCmp>
            <Font.Medium>자동완성 기능에 에러가 발생했어요.</Font.Medium>
          </Style.AutoCmp>
        )}
      </Style.Absolute>
    </Style.Relative>
  );
}

export default AutoCmpContainer;

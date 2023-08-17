/* eslint-disable import/no-extraneous-dependencies */
import { useState } from '@storybook/addons';

import { MagnifyingGlassIcon } from '@/assets/Icons';
import SearchInput from '@/components/common/SearchInput';
import AutoCmpContainer from '@/components/common/SearchInput/AutoCmpContainer';
import * as Style from '@/components/common/SearchInput/style';
import * as Layout from '@/components/common/layout/index';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Common/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Layout.Box width='275px'>
        <Story />
      </Layout.Box>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;

export function Default() {
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const MockAutocmpList = ['자동완성 예시1', '자동완성 예시2'];
  const state = 'success';

  return (
    <Layout.HStack width='100%' height='60px' justifyContent='space-between' maxWidth='310px'>
      <Style.SearchInputBox focus={isFocus} search={search}>
        <Style.SearchEnterInput
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={e => setSearch(e.target.value)}
          aria-label='search-input'
        />
        {isFocus && search && (
          <AutoCmpContainer autoCmpList={MockAutocmpList} setSearch={setSearch} state={state} />
        )}
      </Style.SearchInputBox>

      <Style.SearchButton type='button'>
        <MagnifyingGlassIcon />
      </Style.SearchButton>
    </Layout.HStack>
  );
}

export function onFocus() {
  const isFocus = true;
  const search = '';

  return (
    <Layout.HStack width='100%' height='60px' justifyContent='space-between' maxWidth='310px'>
      <Style.SearchInputBox focus={isFocus} search={search}>
        <Style.SearchEnterInput
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          aria-label='search-input'
        />
      </Style.SearchInputBox>
      <Style.SearchButton type='button'>
        <MagnifyingGlassIcon />
      </Style.SearchButton>
    </Layout.HStack>
  );
}

export function autoFocus() {
  const isFocus = true;
  const search = '자동완성';
  const MockAutocmpList = ['자동완성 예시1', '자동완성 예시2'];
  const state = 'success';

  return (
    <Layout.HStack width='100%' height='60px' justifyContent='space-between' maxWidth='310px'>
      <Style.SearchInputBox focus={isFocus} search={search}>
        <Style.SearchEnterInput
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          aria-label='search-input'
        />
        <AutoCmpContainer autoCmpList={MockAutocmpList} setSearch={() => false} state={state} />
      </Style.SearchInputBox>
      <Style.SearchButton type='button'>
        <MagnifyingGlassIcon />
      </Style.SearchButton>
    </Layout.HStack>
  );
}

export function autoFocusLoading() {
  const isFocus = true;
  const search = '자동완성';
  const MockAutocmpList = [''];
  const state = 'loading';

  return (
    <Layout.HStack width='100%' height='60px' justifyContent='space-between' maxWidth='310px'>
      <Style.SearchInputBox focus={isFocus} search={search}>
        <Style.SearchEnterInput
          type='text'
          placeholder='살까 말까하는 그 물건...'
          value={search}
          aria-label='search-input'
        />
        <AutoCmpContainer autoCmpList={MockAutocmpList} setSearch={() => false} state={state} />
      </Style.SearchInputBox>
      <Style.SearchButton type='button'>
        <MagnifyingGlassIcon />
      </Style.SearchButton>
    </Layout.HStack>
  );
}

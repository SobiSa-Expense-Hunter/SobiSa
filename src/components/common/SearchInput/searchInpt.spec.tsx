import mockRouter from 'next-router-mock';

import { fireEvent, render, screen } from '@/__test__/utils/customRender';
import SearchInput from '@/components/common/SearchInput';

beforeEach(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
});

describe('<SearchInput /> 정상 동작 테스트', () => {
  it('input의 포커스 기능이 작동해야 한다.', () => {
    const { searchInput } = setup();
    searchInput.focus();
    expect(searchInput).toHaveFocus();

    searchInput.blur();
    expect(searchInput).not.toHaveFocus();
  });

  it('검색을 하면 url params에 검색어가 적용되야 한다.', async () => {
    const { searchInput, searchButton } = setup();
    search('test', { searchInput, searchButton });

    expect(searchInput.value).toBe('test');
    expect(mockRouter).toMatchObject({
      query: { search: 'test' },
    });
  });

  it('1회 검색 후 input의 값이 남아있어야 한다.', () => {
    const { searchInput, searchButton } = setup();
    search('test', { searchInput, searchButton });
    expect(searchInput.value).toBe('test');
  });

  it('url params "search" 값이 있다면 해당 값이 input에 적용되어야 한다.', () => {
    const { searchInput } = setup();
    mockRouter.setCurrentUrl(`?search=test`);
    expect(searchInput.value).toBe('test');
  });
});

describe('<SearchInput /> 검색 예외 처리 테스트', () => {
  describe('공백 검색 시 검색어 "검색어를 입력해주세요" 모달이 떠야 한다.', () => {
    it('공백 한칸만 검색어로 들어왔을 경우', () => {
      const { searchInput, searchButton } = setup();
      search(' ', { searchInput, searchButton });
      expect(screen.findAllByText('검색어를 입력해주세요.')).toBeTruthy();
    });

    it('공백 여러칸이 검색어로 들어왔을 경우', () => {
      const { searchInput, searchButton } = setup();
      search('           ', { searchInput, searchButton });
      expect(screen.findAllByText('검색어를 입력해주세요.')).toBeTruthy();
    });
  });

  describe('특수문자 검색 시 검색어 "특수문자를 제외하고 입력해주세요." 모달이 떠야 한다.', () => {
    it('특수문자만 있는 검색어가 들어왔을 경우 ', () => {
      const { searchInput, searchButton } = setup();
      search('$', { searchInput, searchButton });
      expect(screen.findAllByText('특수문자를 제외하고 입력해주세요.')).toBeTruthy();
    });

    it('특수문자 포함한 검색어가 들어왔을 경우', () => {
      const { searchInput, searchButton } = setup();
      search('$test', { searchInput, searchButton });
      expect(screen.findAllByText('특수문자를 제외하고 입력해주세요.')).toBeTruthy();
    });
  });

  it('검색어 앞 뒤에 공백이 있을 시 제거하고 검색되어야 한다.', () => {
    const { searchInput, searchButton } = setup();
    search(' test ', { searchInput, searchButton });
    expect(mockRouter).toMatchObject({
      query: { search: 'test' },
    });
  });
});

function setup() {
  const utils = render(<SearchInput />);
  const searchInput = screen.getByLabelText('search-input') as HTMLInputElement;
  const searchButton = screen.getByRole('button');
  return {
    searchInput,
    searchButton,
    ...utils,
  };
}

interface SearchProps {
  searchInput: HTMLInputElement;
  searchButton: HTMLElement;
}

function search(searchVal: string, { searchInput, searchButton }: SearchProps) {
  fireEvent.change(searchInput, { target: { value: searchVal } });
  fireEvent.click(searchButton);
}

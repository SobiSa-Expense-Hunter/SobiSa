import { renderHook } from '@testing-library/react';

import useLocalStorage from './useLocalStorage';

describe('useLocalStorage 정상 작동 테스트', () => {
  it('key와 velue를 저장하면 로컬스토리지에 저장이 되어야 한다', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'init'));
    const [state, setState] = result.current;
    expect(state).toBe('init');
  });
});

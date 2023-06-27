import mockRouter from 'next-router-mock';

import { fireEvent, render, screen, waitFor } from '@/__test__/utils/customRender';
import { ONBOARDING, VISITED, LocalStorageKeys } from '@/constant/localstorage';
import * as useLocalStorage from '@/hooks/useLocalStorage';
import Home from '@/pages';

jest.mock('@/hooks/useLocalStorage');
const localStorageMock = jest.spyOn(useLocalStorage, 'default');

describe('main 페이지 정상 작동 테스트', () => {
  describe('로컬스토리지 VISITED 값 변화에 따른 테스트', () => {
    it('로컬스토리지의 VISITED가 DATE 일 경우 MAIN PAGE에 머물러야 한다.', () => {
      localStorageMock.mockReturnValue([VISITED.status.DATE, () => '_']);
      render(<Home />);
      expect(mockRouter.asPath).toBe('/');
    });
    it('로컬스토리지의 VISITED가 false일 경우, ABOUT 페이지로 이동해야 한다', () => {
      localStorageMock.mockReturnValue([VISITED.status.FALSE, () => '_']);
      render(<Home />);
      expect(mockRouter.asPath).toBe('/about');
    });
  });

  describe('로컬스토리지 ONBOARDING 값 변화에 따른 테스트', () => {
    it('로컬스토리지의 ONBOARDING이 NOT_WATCHED일 경우 Onboarding이 보여져야 한다.', () => {
      localStorageMock
        .mockImplementationOnce(() => [VISITED.status.DATE, () => '_'])
        .mockImplementation(() => [ONBOARDING.status.NOT_WATCHED, () => '_']);

      const { findByText, findAllByRole } = render(<Home />);
      expect(findByText(' 사고 싶은 물건을 입력하세요!')).toBeTruthy();
      expect(findByText('버튼을 눌러 검색하세요!')).toBeTruthy();
      expect(findAllByRole('button', { description: '시작하기' })).toBeTruthy();
    });

    it('ONBOARDING의 "시작하기" 버튼을 누를 경우 온보딩 말풍선이 떠야 한다.', () => {
      localStorageMock.mockImplementation((key: LocalStorageKeys, value: string) => {
        if (key === VISITED.key) return [VISITED.status.DATE, () => '_'];
        return [value, (newState: string) => window.localStorage.setItem(ONBOARDING.key, newState)];
      });

      render(<Home />);
      expect(screen.findByText(/사고 싶은 물건을 입력하세요!/)).toBeTruthy();
      fireEvent.click(screen.getByLabelText('FadeInBackground'));
      expect(screen.getByAltText(/onboarding/)).toBeTruthy();
    });
  });
});

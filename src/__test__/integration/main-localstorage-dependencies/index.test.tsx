import mockRouter from 'next-router-mock';

import { RenderResult, render } from '@/__test__/utils/customRender';
import { ONBOARDING, VISITED, LocalStorageKeys } from '@/constant/localstorage';
import * as useLocalStorage from '@/hooks/useLocalStorage';
import Home from '@/pages';

jest.mock('@/hooks/useLocalStorage');
const localStorageMock = jest.spyOn(useLocalStorage, 'default');

afterEach(() => {
  jest.clearAllMocks();
  mockRouter.push('/');
});

describe('main 페이지 정상 작동 테스트', () => {
  describe('로컬스토리지 VISITED 값 변화에 따른 테스트', () => {
    it('로컬스토리지의 VISITED가 false일 경우, ABOUT 페이지로 이동해야 한다', () => {
      localStorageMock.mockReturnValue([VISITED.status.FALSE, () => '_']);
      render(<Home />);
      expect(mockRouter.asPath).toBe('/about');
    });

    it('로컬스토리지의 VISITED가 DATE 일 경우 MAIN PAGE에 머물러야 한다.', () => {
      localStorageMock.mockReturnValue([VISITED.status.DATE, () => '_']);
      render(<Home />);
      expect(mockRouter.asPath).toBe('/');
    });
  });

  describe('로컬스토리지 ONBOARDING 값 변화에 따른 테스트', () => {
    it('로컬스토리지의 ONBOARDING이 NOT_WATCHED일 경우 Onboarding이 보여져야 한다.', async () => {
      localStorageMock.mockImplementation((key: LocalStorageKeys, value: string) => {
        if (key === VISITED.key) return [VISITED.status.DATE, () => '_'];
        if (key === ONBOARDING.key) return [ONBOARDING.status.NOT_WATCHED, () => '_'];
        return ['_', () => value];
      });

      expect(await isOnboardingOpen(render(<Home />))).toBeTruthy();
    });

    it('로컬스토리지의 ONBOARDING이 WATCHED일 경우 Onboarding이 보여지지 말아야 한다.', async () => {
      localStorageMock.mockImplementation((key: LocalStorageKeys, value: string) => {
        if (key === VISITED.key) return [VISITED.status.DATE, () => '_'];
        if (key === ONBOARDING.key) return [ONBOARDING.status.WATCHED, () => '_'];
        return ['_', () => value];
      });

      expect(await isOnboardingOpen(render(<Home />))).toBeFalsy();
    });
  });
});

async function isOnboardingOpen(thisScreen: RenderResult) {
  try {
    await thisScreen.findByText(/사고 싶은 물건을 입력하세요!/);
    await thisScreen.findByText(/버튼을 눌러 검색하세요!/);
    return true;
  } catch (e) {
    return false;
  }
}

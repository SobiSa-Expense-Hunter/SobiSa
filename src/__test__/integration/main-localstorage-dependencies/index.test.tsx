import mockRouter from 'next-router-mock';

import { render, waitFor } from '@/__test__/utils/customRender';
import { VISITED } from '@/constant/localstorage';
import * as useLocalStorage from '@/hooks/useLocalStorage';
import Home from '@/pages';

jest.mock('@/hooks/useLocalStorage');
const localStorageMock = jest.spyOn(useLocalStorage, 'default');

describe('main 페이지와 로컬스토리지 의존성 테스트', () => {
  it('로컬스토리지의 VISITED가 false일 경우, ABOUT 페이지로 이동해야 한다', async () => {
    localStorageMock.mockImplementation(() => [VISITED.status.FALSE, () => '_']);
    render(<Home />);
    waitFor(() => expect(mockRouter.asPath).toBe('/about'));
  });
  it('로컬스토리지의 VISITED가 DATE 일 경우 MAIN PAGE에 머물러야 한다.', async () => {
    localStorageMock.mockImplementation(() => [VISITED.status.DATE, () => '_']);
    render(<Home />);
    waitFor(() => expect(mockRouter.asPath).toBe('/'));
  });

  //   it('로컬스토리지의 ONBOARDING이 FALSE일 경우 Onboarding이 보여져야 한다.');
  //   it('로컬스토리지의 ONBOARDING이 WATCHED일 경우 Onboarding이 사라져야 한다.');
});

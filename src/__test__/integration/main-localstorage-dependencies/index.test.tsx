import mockRouter from 'next-router-mock';

import { fireEvent, render, screen, waitFor } from '@/__test__/utils/customRender';
import { ONBOARDING, VISITED } from '@/constant/localstorage';
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

  it('로컬스토리지의 ONBOARDING이 NOT_WATCHED일 경우 Onboarding이 보여져야 한다.', async () => {
    localStorageMock
      .mockImplementationOnce(() => [VISITED.status.DATE, () => '_'])
      .mockImplementation(() => [ONBOARDING.status.NOT_WATCHED, () => '_']);

    const { findByText, findAllByRole } = render(<Home />);
    waitFor(() => {
      expect(findByText).toBe(' 사고 싶은 물건을 입력하세요!');
      expect(findByText).toBe('버튼을 눌러 검색하세요!');
      expect(findAllByRole('button')).toBe('시작하기');
    });
  });

  it('ONBOARDING의 "시작하기" 버튼을 누를 경우 Onboarding이 사라져야 한다.', () => {
    localStorageMock
      .mockImplementationOnce(() => [VISITED.status.DATE, () => '_'])
      .mockImplementation(() => [ONBOARDING.status.NOT_WATCHED, () => '_']);

    render(<Home />);
    waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: '시작하기' }));
      expect(screen.findByText).not.toBe(' 사고 싶은 물건을 입력하세요!');
    });
  });
});

import { screen } from '@testing-library/react';

import { render } from '@/__test__/utils/customRender';
import { VISITED } from '@/constant/localstorage';
import Home from '@/pages/index';

jest.mock('@/hooks/useLocalStorage', () => {
  return jest.fn(() => [VISITED.status.TRUE, '_']);
});

describe('<Home />', () => {
  it('메인 TEXT 로딩이 되어야 한다.', () => {
    render(<Home />);
    const heading = screen.getByText('지금 뭘 사고 싶나요?');
    expect(heading).toBeInTheDocument();
  });
});

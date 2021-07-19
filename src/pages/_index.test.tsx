import { screen } from '@testing-library/react';

import { Teste } from '.';
import { renderWithTheme } from '../utils/tests/helpers';

describe('<PageComponent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Teste />);

    expect(
      screen.getByRole('heading', { name: /Olá mundo/i })
    ).toBeInTheDocument();
  });
});
